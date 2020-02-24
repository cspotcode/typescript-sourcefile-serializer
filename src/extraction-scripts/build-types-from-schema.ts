import { JSONSchema7 } from 'json-schema';
import { readFileSync , writeFileSync } from 'fs';
import { resolve } from 'path';
import * as util from 'util';
import {get, uniqueId} from 'lodash';
import { createProxy } from '../forward-reference-proxy';
import assert from 'assert';
import {outdent} from 'outdent';
import { ArrayType, AbstractType, IntersectionType, LiteralType, ObjectProperty, ObjectType, PrimitiveType, Type, UnionType , allTypes, booleanType, numberType, stringType, unknownType} from '../types';

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

    const schemaObjToTypeMap = new Map<any, { type: Type }>();
    const types = {};
    for (const [name, defn] of Object.entries(definitions)) {
        const type = getOrMakeTypeFor(defn);
        type.preferredIdentifier = name.replace(/[\.-<>]/g, '_');
        types[name] = type;
    }
    // console.log(util.inspect(types, {
    //     depth: 10
    // }));
    writeFileSync(resolve(__dirname, 'types.gen.ts'), serializeTypesToCode());

    function getOrMakeTypeFor(defn: JSONSchema7) {
        const already = schemaObjToTypeMap.get(defn);
        if (already) return already.type;
        
        // Use a proxy in case anyone gets a reference to the type before it's ready.
        const makeIt = { type: createProxy(() => {assert(type); return type}, {[util.inspect.custom]() {return type}}) };
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
            const type = new ArrayType(getOrMakeTypeFor(defn.items as TODO));
            addProperties(defn, type);
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
                type.properties.push(new ObjectProperty(name, required.includes(name), getOrMakeTypeFor(schema as TODO)));
                if(type.properties[type.properties.length - 1].type === undefined) {
                    console.dir({name, schema});
                }
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


    function serializeTypesToCode() {
        let acc = outdent `
            import { proxy, ArrayType, AbstractType, IntersectionType, LiteralType, ObjectProperty, ObjectType, PrimitiveType, Type, UnionType , allTypes, numberType, stringType, unknownType} from './types';
            // import { booleanType } from './types';


        `;
        for(const type of allTypes.values()) {
            const constructorName = type.constructor.name;
            acc += outdent `
                const ${ type.getIdentifier() } = ${ type.getCreateExpression() };

            `;
        }
        return acc;
    }
}

main().catch(e => {
    console.error(e);
    process.exit(1);
});