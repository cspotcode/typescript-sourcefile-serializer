import * as fs from 'fs';
import * as Path from 'path';
import * as ts from 'typescript';
import * as assert from 'assert';

const tsAny = ts as any;

enum Constructor {
    SourceFileObject,
    NodeObject,
    IdentifierObject,
    PrivateIdentifierObject,
    TokenOrIdentifierObject,
    // SymbolObject
    TokenObject,
    // TypeObject
    // SignatureObject
    SourceMapSourceObject,

    Object,
    Array,
    Map,
}

const constructors: Record<Constructor, any> = {
    [Constructor.SourceFileObject]: tsAny.createSourceFile('foo', 'bar').constructor,
    [Constructor.NodeObject]: tsAny.createFor().constructor,
    [Constructor.IdentifierObject]: ts.createIdentifier('foo').constructor,
    [Constructor.PrivateIdentifierObject]: ts.createNode(tsAny.SyntaxKind.PrivateIdentifier).constructor,
    [Constructor.TokenOrIdentifierObject]: ts.createIdentifier('foo').constructor.prototype.__proto__.constructor,
    // SymbolObject
    [Constructor.TokenObject]: tsAny.createToken().constructor,
    // TypeObject
    // SignatureObject
    [Constructor.SourceMapSourceObject]: ts.createSourceMapSource('foo', 'bar').constructor,
    [Constructor.Object]: Object,
    [Constructor.Array]: Array,
    [Constructor.Map]: Map,
};

type Marshalled = MarshalledInstance | MarshalledMap | MarshalledArray | MarshalledBoolean | MarshalledUndefined | MarshalledNull | MarshalledNumber | MarshalledString | MarshalledReference | PendingType;
interface MarshalledReference {
    type: 'reference';
    toIndex: number;
}
interface MarshalledInstance {
    type: 'instance',
    ctorId: Constructor;
    fields: Record<string, Marshalled>;
}
type Fields = Record<string, Marshalled>;
// interface Field {
//     name: string;
//     value: Marshalled;
// }
interface MarshalledNumber {
    type: 'number';
    value: number;
}
interface MarshalledBoolean {
    type: 'boolean';
    value: boolean;
}
interface MarshalledString {
    type: 'string';
    value: string;
}
interface MarshalledUndefined {
    type: 'undefined';
}
interface MarshalledNull {
    type: 'null';
}
interface MarshalledMap {
    type: 'map';
    entries: MapEntry[];
}
interface MarshalledArray {
    type: 'array';
    items: Marshalled[];
}
type MapEntry = [Marshalled, Marshalled];

/* STATE */
const encounteredConstructors = new Set<Constructor>();

type Type = ArrayType | MapType | CtorAndKindType | ObjectShapeType | NullType | UndefinedType | StringType | NumberType | BooleanType | PendingType;
const a: TypeToString = null as any as Type;
interface TypeToString {
    typeToString(): string;
}
class ObjectShapeType implements TypeToString {
    constructor(public key: string) { }
    fields: AstField[] = [];
    static keyFromExample(value) {
        const k = Object.getOwnPropertyNames(value);
        k.sort();
        return k.join(',');
    }
    typeToString() {
        return `ObjectShape<${ this.fields.map(v => `'${ v.name }'`).join(' | ') }>`;
    }
}
/** Constructor and Kind combo */
class CtorAndKindType implements TypeToString {
    constructor(public ctorId: number, public kind: number) { }
    fields: AstField[] = [];
    toJSON() {
        return {
            ctorId: this.ctorId,
            ctorName: Constructor[this.ctorId],
            kind: this.kind,
            kindName: ts.SyntaxKind[this.kind],
            fields: this.fields
        }
    }
    typeToString() {
        return `CtorAndKindType<${ Constructor[this.ctorId] }, ${ ts.SyntaxKind[this.kind] }>`;
    }
}
class AstField {
    constructor(props: Partial<AstField>) {
        Object.assign(this, props);
    }
    name: string;
    required: boolean;
    types: UnionType = new UnionType();
    toJSON() {
        return `${this.name}${this.required ? '' : '?'}: ${ this.types.typeToString() }`
        // return {
        //     ...this,
        //     types: [...this.types.values()]
        // };
    }
}
class UnionType implements TypeToString {
    unionOf: Set<Type> = new Set();
    addType(t: Type) {
        // If adding array type, merge with existing array type
        if(t instanceof ArrayType) {
            const existingArray = this.getArrayType();
            if(existingArray) {
                for(const item of t.itemType.unionOf) {
                    existingArray.itemType.addType(item);
                }
                return;
            }
        }

        // If adding map type, merge with existing map type
        // TODO

        this.unionOf.add(t);
    }
    getArrayType() {
        for(const item of this.unionOf) {
            if(item instanceof ArrayType) return item;
        }
    }
    getMapType() {
        for(const item of this.unionOf) {
            if(item instanceof MapType) return item;
        }
    }
    typeToString() {
        return [...this.unionOf.values()].map(v => {
            return v.typeToString();
        }).join(' | ');
    }
}
class ArrayType implements TypeToString {
    itemType: UnionType = new UnionType();
    typeToString() {
        return `Array<${ this.itemType.typeToString() }>`
    }
}
class MapType implements TypeToString {
    keyType: UnionType = new UnionType();
    valueType: UnionType = new UnionType();
    typeToString() {
        return `Map<${ this.keyType.typeToString() }, ${ this.valueType.typeToString() }>`;
    }
}
class StringType implements TypeToString {
    primitiveType = 'string';
    typeToString() {return 'string'}
}
class NumberType implements TypeToString {
    primitiveType = 'number';
    typeToString() {return 'number'}
}
class BooleanType implements TypeToString {
    primitiveType = 'boolean';
    typeToString() {return 'boolean'}
}
class NullType implements TypeToString {
    primitiveType = 'null';
    typeToString() {return 'null'}
}
class UndefinedType implements TypeToString {
    primitiveType = 'undefined';
    typeToString() {return 'undefined'}
}
class PendingType implements TypeToString {
    __pendingType = true;
    resolvedTo: Type | undefined;
    typeToString() {
        return this.resolvedTo ? this.resolvedTo.typeToString() : '<pending>';
    }
}
const stringType = new StringType();
const numberType = new NumberType();
const booleanType = new BooleanType();
const nullType = new NullType();
const undefinedType = new UndefinedType();

const objectTypes: (CtorAndKindType | ObjectShapeType)[] = [];

const marshallStack = [];
let nextEncounterIndex = 1;
const encountered = new Map<any, Type>();
function getType(value: any): Type {
    marshallStack.push(value);

    try {
        if (typeof value === 'string') {
            return stringType;
        }
        if (typeof value === 'number') {
            return numberType;
        }
        if (value === null) {
            return nullType;
        }
        if (typeof value === 'boolean') {
            return booleanType;
        }
        if (value === undefined) {
            return undefinedType;
        }

        // is not a primitive; might be a backreference to a previously-encountered object
        const previouslyEncounteredType = encountered.get(value);
        if (previouslyEncounteredType) {
            return previouslyEncounteredType;
        }
        const pendingType = new PendingType();
        encountered.set(value, pendingType);
        function resolveType<T extends Type>(t: T): T {
            encountered.set(value, t);
            pendingType.resolvedTo = t;
            return t;
        }

        // Must be an instance of a recognized class
        const proto = value.__proto__;
        const ctor = Object.entries(constructors).find(([k, v]) =>
            proto === v.prototype
        );
        assert(ctor, value.constructor.name);
        const ctorId = +ctor[0] as Constructor;
        encounteredConstructors.add(ctorId);

        if (value.__proto__ === Array.prototype) {
            const ret = new ArrayType();
            value.forEach(v => {
                ret.itemType.addType(getType(v));
            });
            return resolveType(ret);
        }
        if (value.__proto__ === Map.prototype) {
            const ret = new MapType();
            [...(value as Map<any, any>).entries()].forEach(([k, v]) => {
                ret.keyType.addType(getType(k));
                ret.valueType.addType(getType(v));
            });
            return resolveType(ret);
        }

        function getDescriptor(ctorId: number, value) {
            if(ctorId === Constructor.Object) {
                // TODO get descriptor based on object's shape, not `kind`
                const key = ObjectShapeType.keyFromExample(value);
                return objectTypes.find(d => d instanceof ObjectShapeType && d.key === key);
            } else {
                return objectTypes.find(d => d instanceof CtorAndKindType && d.ctorId === ctorId && d.kind === value.kind);
            }
        }
        let objectType = getDescriptor(ctorId, value);
        let objectTypeIsNew = false;
        if (!objectType) {
            objectType = ctorId === Constructor.Object
                ? new ObjectShapeType(ObjectShapeType.keyFromExample(value))
                : new CtorAndKindType(ctorId, value.kind);
            objectTypes.push(objectType);
            objectTypeIsNew = true;
        }

        // const fields: Field[] = [];
        const fields: Fields = {};
        const opns = Object.getOwnPropertyNames(value);
        for (const prop of opns) {
            // fields.push({name: prop, value: marshall(v)});
            const type = getType(value[prop]);
            // fields[prop] = type;
            const dfield = objectType.fields.find(v => v.name === prop);
            if (dfield) {
                dfield.types.addType(type);
            } else {
                const d = new AstField({
                    name: prop,
                    required: objectTypeIsNew,
                    types: new UnionType()
                });
                d.types.addType(type);
                objectType.fields.push(d);
            }
        }
        if (!objectTypeIsNew) {
            for (const dfield of objectType.fields) {
                const name = dfield.name;
                const found = opns.find(v => v === name);
                // if dfield has a field that current instance does not have, then the field must be optional
                if (!found) {
                    dfield.required = false;
                }
            }
        }

        return resolveType(objectType);
    } catch (e) {
        console.dir(marshallStack);
        marshallStack.length = 0;
        throw e;
    } finally {
        marshallStack.pop();
    }
}

const src = fs.readFileSync(Path.resolve(__dirname, 'example.ts'), 'utf8');
const src2 = fs.readFileSync(Path.resolve(require.resolve('typescript/package.json'), '../lib/lib.dom.d.ts'), 'utf8');
const sourceFile = ts.createSourceFile('example.ts', src, ts.ScriptTarget.Latest, false, ts.ScriptKind.TS);
const sourceFile2 = ts.createSourceFile('example.ts', src2, ts.ScriptTarget.Latest, false, ts.ScriptKind.TS);
// console.dir(sourceFile, { depth: 10 });
getType(sourceFile);
getType(sourceFile2);
const output = {
    encounteredConstructors: [...encounteredConstructors.values()].map(v => Constructor[v]),
    descriptors: objectTypes,
    // marshalled
};
fs.writeFileSync(Path.resolve(__dirname, 'serialized.json'), JSON.stringify(output, null, 2));

/*
 * Build set of types
 * For each Constructor
 *   For each `kind`
 *
 */

// function unmarshaller() {

//     const { getNumber, getString, getArray, getBoolean } = null as any;
//     function createXYZ() {
//         const isCapturedOrBackreference = getBitfield();
//         if(isCapturedOrBackreference & BACKREFERENCE) {
//             return getBackreference();
//         }
//         const type = getByte();
//         switch(type) {
//             case 1:
//                 return createXYZ();
//             case 2:
//                 return createXYZ();
//         }

//         const optionalFields = getBitfield();
//         const pos = getNumber();
//         const end = getNumber();
//         const flags = getNumber();
//         const modifierFlagsCache = getNumber();
//         const transformFlags = getNumber();
//         const text = getString();
//         const bindDiagnostics = createArrayOfXYZ();
//         const isDeclarationFile = getBoolean();
//         const pragmas = createMapFromXYZToXYZ();
//         const checkJsDirective = createObjectOfShapeXYZ();
//         const ret = {
//             __proto__: SourceFileObject,
//             pos,
//             end,
//             flags,
//             modifierFlagsCache,
//             transformFlags,
//             text,
//             bindDiagnostics,
//             isDeclarationFile,
//             pragmas,
//             checkJsDirective
//         };
//         if (getBoolean()) {
//             ret.optionalField = getXYZ();
//         }
//         if(isCapturedOrBackreference & CAPTURE) {
//             captures.push(ret);
//         }
//         return ret;
//     }
// }