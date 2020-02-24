import * as fs from 'fs';
import * as Path from 'path';
import * as ts from 'typescript';
import * as assert from 'assert';
import { captureRejectionSymbol } from 'events';

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

type Marshalled = MarshalledInstance | MarshalledMap | MarshalledArray | MarshalledBoolean | MarshalledUndefined | MarshalledNull | MarshalledNumber | MarshalledString | MarshalledReference;
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

type Type = ArrayType | MapType | CtorAndKindType | ObjectShapeType;
class ObjectShapeType {
    constructor(public key: string) { }
    fields: AstField[] = [];
    static keyFromExample(value) {
        const k = Object.getOwnPropertyNames(value);
        k.sort();
        return k.join(',');
    }
}
/** Constructor and Kind combo */
class CtorAndKindType {
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
}
class AstField {
    constructor(props: Partial<AstField>) {
        Object.assign(this, props);
    }
    name: string;
    required: boolean;
    types: UnionType = new UnionType();
    toJSON() {
        return `${this.name}${this.required ? '' : '?'}: ${[...this.types.unionOf.values()].join(' | ')}`
        // return {
        //     ...this,
        //     types: [...this.types.values()]
        // };
    }
}
class UnionType {
    unionOf: Set<Type> = new Set();
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
}
class ArrayType {
    itemType: UnionType = new UnionType();
}
class MapType {
    keyType: UnionType = new UnionType();
    valueType: UnionType = new UnionType();
}

const objectTypes: (CtorAndKindType | ObjectShapeType)[] = [];

const marshallStack = [];
let nextEncounterIndex = 1;
const encountered = new Map<any, number>();
function marshall(value: any): Marshalled {
    marshallStack.push(value);

    try {
        if (typeof value === 'string')
            return { type: 'string', value };
        if (typeof value === 'number') {
            return { type: 'number', value }
        }
        if (value === null) {
            return { type: 'null' }
        }
        if (typeof value === 'boolean') {
            return { type: 'boolean', value };
        }
        if (value === undefined) {
            return { type: 'undefined' }
        }

        const oldEncounterIndex = encountered.get(value);
        if (oldEncounterIndex) {
            console.log(`backreference to ${oldEncounterIndex} from ${nextEncounterIndex}`);
            return { type: 'reference', toIndex: oldEncounterIndex };
        }
        encountered.set(value, nextEncounterIndex++);

        // Must be an instance of a recognized class
        const proto = value.__proto__;
        const ctor = Object.entries(constructors).find(([k, v]) =>
            proto === v.prototype
        );
        assert(ctor, value.constructor.name);
        const ctorId = +ctor[0] as Constructor;
        encounteredConstructors.add(ctorId);

        if (value.__proto__ === Array.prototype) {
            return {
                type: 'array',
                items: value.map(v => marshall(v))
            }
        }
        if (value.__proto__ === Map.prototype) {
            return {
                type: 'map',
                entries: [...(value as Map<any, any>).entries()].map(([k, v]) => {
                    return [marshall(k), marshall(v)]
                })
            };
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
            const marshalled = marshall(value[prop]);
            fields[prop] = marshalled;
            const dfield = objectType.fields.find(v => v.name === prop);
            if (dfield) {
                dfield.types.unionOf.add(marshalled.type)
            } else {
                const d = new AstField({
                    name: prop,
                    required: objectTypeIsNew,
                    types: new UnionType()
                });
                // d.types.unionOf.add()
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

        return {
            type: 'instance',
            ctorId,
            fields
        };
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
const marshalled = marshall(sourceFile);
const marshalled2 = marshall(sourceFile2);
const output = {
    encounteredConstructors: [...encounteredConstructors.values()].map(v => Constructor[v]),
    descriptors: objectTypes,
    marshalled
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