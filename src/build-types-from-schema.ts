import { JSONSchema7 } from 'json-schema';
import { readFileSync } from 'fs';
import { resolve } from 'path';
import assert from 'assert';
import * as util from 'util';
import {get} from 'lodash';

type TODO = any;

async function main() {
    const schemaTextWithRefs = readFileSync(resolve(__dirname, 'schema.json'), 'utf8');
    const schemaWithRefs = JSON.parse(schemaTextWithRefs);
    const defn = schemaWithRefs.definitions['AggregateInterfaceForJsonSchemaExtraction'];
    schemaWithRefs.properties = defn.properties;
    schemaWithRefs.type = defn.type;
    delete schemaWithRefs.$ref;
    delete schemaWithRefs.definitions['AggregateInterfaceForJsonSchemaExtraction'];
    const schema = deref(schemaWithRefs);
    function deref(root) {
        const seen = new Set();
        visit(root);
        return root;

        function resolveRef(obj) {
            while(obj && obj.$ref) {
                const path = obj.$ref.replace(/^#\//, '').split('/');
                obj = get(root, path);
            }
            return obj;
        }
        function visit(obj) {
            obj = resolveRef(obj);
            if(['string', 'number', 'boolean'].includes(typeof obj) || obj == null) {
                return obj;
            }
            if(seen.has(obj)) return obj;
            seen.add(obj);
            if(Array.isArray(obj)) {
                for(let i = 0; i < obj.length; i++) {
                    obj[i] = visit(obj[i]);
                }
            } else {
                for(const prop of Object.keys(obj)) {
                    obj[prop] = visit(obj[prop]);
                }
            }
            return obj;
        }
    }

    const { definitions } = schema;

    for (const [name, defn] of Object.entries(definitions)) {
        if (defn.anyOf || defn.allOf) {
            assert(Object.keys(defn).length === 1);
        }
    }

    type Type = UnionType | ObjectType | IntersectionType | ArrayType | LiteralType;
    class IntersectionType {
        types: Type[] = [];
    }
    class UnionType {
        types: Type[] = [];
    }
    class ObjectType {
        properties: ObjectProperty[] = [];
    }
    class ArrayType extends ObjectType {
        items: Type;
    }
    class ObjectProperty {
        constructor(name: string, required: boolean, type: Type) {
            this.name = name;
            this.type = type;
            this.required = required;
        }
        name: string;
        type: Type;
        required: boolean;
    }
    class LiteralType {
        constructor(public value: any) {}
    }
    class PrimitiveType {}
    const booleanType = new PrimitiveType();
    const stringType = new PrimitiveType();
    const numberType = new PrimitiveType();
    const unknownType = new PrimitiveType();

    const schemaObjToTypeMap = new Map<any, { type: Type }>();
    const types = {};
    for (const [name, defn] of Object.entries(definitions)) {
        types[name] = getOrMakeTypeFor(defn);
    }
    console.dir(types, {depth: 10});

    function getOrMakeTypeFor(defn: JSONSchema7) {
        const already = schemaObjToTypeMap.get(defn);
        if (already) return already.type;
        const makeIt = { type: undefined };
        schemaObjToTypeMap.set(defn, makeIt);
        const type = makeTypeFor(defn);
        makeIt.type = type;
        return makeIt.type;
    }
    function makeTypeFor(defn: JSONSchema7) {
        if (defn.anyOf) {
            const types = defn.anyOf.map(getOrMakeTypeFor);
            const union = new UnionType();
            union.types.push(...types);
            return union;
        }
        if (defn.allOf) {
            const types = defn.allOf.map(getOrMakeTypeFor);
            const intersection = new IntersectionType();
            intersection.types.push(...types);
            return intersection;
        }
        if(defn.type === 'array') {
            const type = new ArrayType();
            addProperties(defn, type);
            type.items = getOrMakeTypeFor(defn.items as TODO);
            return type;
        }
        if(defn.type === 'object') {
            const type = new ObjectType();
            addProperties(defn, type);
            return type;
        }
        function addProperties(defn: JSONSchema7, type: ObjectType) {
            const {properties = {}, required = []} = defn;
            for(const [name, schema] of Object.entries(properties)) {
                type.properties.push(new ObjectProperty(name, required.includes(name), getOrMakeTypeFor(schema as TODO)))
            }
        }
        if(defn.enum && defn.enum.length === 1) {
            return new LiteralType(defn.enum[0]);
        }
        if(defn.type === 'number') {
            return numberType;
        }
        if(defn.type === 'string') {
            return stringType;
        }
        if(defn.type === 'boolean') {
            return booleanType;
        }
        if(defn.TODO) return unknownType;
        throw new Error('unexpected type on: ' + util.inspect(defn));
    }
}

main().catch(e => {
    console.error(e);
    process.exit(1);
});