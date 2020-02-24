import {get, uniqueId} from 'lodash';
import { outdent } from 'outdent';
import assert from 'assert';
import { createProxy } from './forward-reference-proxy';
import * as util from 'util';

/**
 * Data structures to build a hacky "type system" that describes the shape of objects, arrays,
 * and primitive values in an AST.  The focus of this "type system" is strictly to support
 * code-generation of a serializer and deserializer.
 * 
 * Serializer needs to:
 * - needs to understand how to classify runtime objects for serialization.
 *   (e.g. any time the TS AST uses a "union" type)
 * 
 * Deserializer needs to:
 * - construct objects with the correct prototypes and property ordering.
 * - It does not need to understand type heritage. (if TS AST has `interface A extends B`,
 *   we merge fields of A and B into a single type to make deserializer simpler)
 * 
 * Classes also have members to help with emitting `.ts` source code that will instantiate identical copies of themselves.
 * This is a bit confusing, but we originally derived a collection of types by parsing a JSON
 * schema.  After instantiation, we asked those types to emit `.ts` code that would create themselves.
 * This emitted code lives in `ts-ast-types.ts`
 * This emitted code is what we use today, and has since been hand-modified.  The JSON schema is
 * no longer involved.
 */

export const allTypes = new Map<string, Type>();

export type Type = UnionType | ObjectType | IntersectionType | ArrayType | LiteralType<any> | PrimitiveType;
export abstract class AbstractType {
    constructor() {
        allTypes.set(this.id, this as unknown as Type);
    }
    preferredIdentifier: string | undefined = undefined;
    id = uniqueId();
    getIdentifier(): string {
        if(this.preferredIdentifier != null) return this.preferredIdentifier;
        return this.generateIdentifier();
    };
    protected generateIdentifier(): string {
        return `type${ this.id }`;
    };
    abstract getCreateExpression(): string;
}
export class IntersectionType extends AbstractType {
    constructor(types: Type[] = []) {
        super();
        this.types.push(...types);
    }

    types: Type[] = [];

    generateIdentifier() {
        return `intersection${this.id}`;
    }
    getCreateExpression() {
        return outdent `
            new IntersectionType([${this.types.map(v => proxyGetExpression(v)).join(',\n')}])
        `;
    }
}
export class UnionType extends AbstractType {
    constructor(types: Type[] = []) {
        super();
        this.types.push(...types);
    }
    types: Type[] = [];
    getCreateExpression() {
        return outdent `
            new UnionType([${this.types.map(v => proxyGetExpression(v)).join(', \n')}])
        `;
    }
    /** Compute and return a data structure that tells us how to classify a runtime AST object into a single type so it can be serialized. */
    getClassificationInstructions() {
        interface ClassificationInstructions {
            primitives: {
                boolean: boolean,
                string: boolean,
                number: boolean,
            },
            literals: LiteralType[],
            arrayTypes: ArrayType[],
            prototypeMap: Map<Prototype, ClassificationInstructionsForPrototype>;
        }
        interface ClassificationInstructionsForPrototype {
            types: Type[];
            kindToTypeMap: Map<number, Type>;
        }
        const instructions: ClassificationInstructions = {
            prototypeMap: new Map(),
            primitives: {boolean: false, number: false, string: false},
            literals: [],
            arrayTypes: []
        };
        // iterate all types in union, grouping into buckets by prototype, further classifying by kind
        this.forEachType(t => {
            if(t instanceof PrimitiveType) instructions.primitives[t.name] = true;
            else if(t instanceof LiteralType) instructions.literals.push(t);
            else if(t instanceof ArrayType) instructions.arrayTypes.push(t);
            else {
                if(!(t instanceof ObjectType)) {
                    throw new Error('unexpected type');
                }
                let instructionsForPrototype = instructions.prototypeMap.get(t.prototype);
                if(!instructionsForPrototype) {
                    instructionsForPrototype = {
                        kindToTypeMap: new Map(),
                        types: []
                    };
                    instructions.prototypeMap.set(t.prototype, instructionsForPrototype);
                }
                instructionsForPrototype.types.push(t);
                for(const kindValue of t.getKindLiterals()) {
                    assert(!instructionsForPrototype.kindToTypeMap.has(kindValue));
                    instructionsForPrototype.kindToTypeMap.set(kindValue, t);
                }
            }
        });
        return instructions;
    }
    /** Rercursively iterate types in the union, calling callback once for each non-union type */
    forEachType(cb: (t: Type) => void) {
        for(const t of this.types) {
            if(t instanceof UnionType) {
                t.forEachType(cb);
            } else {
                cb(t);
            }
        }
    }
}

/**
 * TS AST uses more than plain arrays and objects.
 * We need to check the __proto__ when serializing,
 * and use the correct factory function when deserializing,
 * to ensure all values have the correctly prototype.
 */
export enum Prototype {
    SourceFileObject,
    NodeObject,
    IdentifierObject,
    PrivateIdentifierObject,
    TokenOrIdentifierObject,
    // SymbolObject,
    TokenObject,
    // TypeObject
    // SignatureObject
    SourceMapSourceObject,

    Object,
    Array,
    Map,
}

export class ObjectType extends AbstractType {
    constructor(prot: Prototype, properties: ObjectProperty[] = []) {
        super();
        this.prototype = prot;
        this.properties.push(...properties);
    }
    prototype: Prototype;
    properties: ObjectProperty[] = [];
    getPropertiesCreateExpression() {
        return outdent `
            [
                ${this.properties.map(v => outdent `
                    ${outdent}
                        new ObjectProperty(${JSON.stringify(v.name)}, ${v.required}, ${ proxyGetExpression(v.type) }),

                `).join('')}]
        `;
    }
    getCreateExpression() {
        return outdent `
            new ObjectType(${ this.getPropertiesCreateExpression() })
        `;
    }
    /** Get all possible literal values that the `kind` field might have */
    getKindLiterals() {
        const ret = [];
        this.properties.filter(v => v.name === 'kind').forEach(v => {
            getLiteralValues(v.type);
            function getLiteralValues(v: Type) {
                if(v instanceof LiteralType) {
                    ret.push(v.value);
                } else if(v instanceof UnionType) {
                    v.forEachType((t) => {
                        getLiteralValues(t);
                    });
                } else {
                    throw new Error('unexpected type');
                }
            }
        });
        return ret;
    }
}
export class ArrayType extends ObjectType {
    constructor(items: Type, properties: ObjectProperty[] = []) {
        super(Prototype.Array, properties);
        this.items = items;
    }
    items: Type;
    getCreateExpression() {
        return outdent `
            new ArrayType(${ proxyGetExpression(this.items) }, ${ this.getPropertiesCreateExpression() })
        `;
    }
}
export class ObjectProperty {
    constructor(name: string, required: boolean, type: Type) {
        this.name = name;
        this.type = type;
        this.required = required;
    }
    name: string;
    type: Type;
    required: boolean;
}
export class LiteralType<T = any> extends AbstractType {
    constructor(public value: T) {
        super();
    }
    generateIdentifier() {
        return `literalType${ `${ this.value }`.replace(/[-\.\<\>]/g, '_') }`;
    }
    getCreateExpression() {
        return outdent `
            new LiteralType(${ JSON.stringify(this.value) })
        `;
    }
}
export class PrimitiveType extends AbstractType {
    constructor(public name: string) {
        super();
    }
    generateIdentifier() {
        return `${ this.name }Type`;
    }
    getCreateExpression() {
        return `new PrimitiveType(${ JSON.stringify(this.name) })`;
    }
}
export const booleanType = new PrimitiveType('boolean');
export const stringType = new PrimitiveType('string');
export const numberType = new PrimitiveType('number');
export const unknownType = new PrimitiveType('unknown');

function proxyGetExpression(type: AbstractType) {
    return `proxy(() => ${type.getIdentifier()})`;
}
export function proxy(getter: () => Type): Type {
    return createProxy(
        () => {
            const t = getter();
            assert(t);
            return t;
        },
        {
            [util.inspect.custom]() {
                return getter();
            }
        }
    );
}