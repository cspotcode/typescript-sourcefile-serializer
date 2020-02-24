#!/usr/bin/env ts-script
import {resolve} from "path";
import * as fs from "fs";
import {get, escapeRegExp} from "lodash";
import {readdirSync, writeFileSync, writeFile} from "fs";

import * as TJS from "typescript-json-schema";

// optionally pass argument to schema generator
const settings: TJS.PartialArgs = {
    required: true,
    aliasRef: true,
    ref: true,
    topRef: true
};

// optionally pass ts compiler options
const compilerOptions: TJS.CompilerOptions = {
    strictNullChecks: true
}

// optionally pass a base path
const basePath = resolve(__dirname, 'copied-from-typescript');

const program = TJS.getProgramFromFiles(
    readdirSync(basePath).map(file => resolve(basePath, file)),
    compilerOptions, basePath
);

const generator = TJS.buildGenerator(program, settings);

// all symbols
const symbols = generator.getUserSymbols();
const relevantSymbols = symbols.filter(v => v.match(/^ts\./));
console.log(relevantSymbols.join('\n'));

// writeFileSync('src/symbols.ts', JSON.stringify(relevantSymbols, null, '  '));
// writeFileSync('foo.txt', relevantSymbols.map(s => `${ s.replace('ts.', '') }: ${s.replace('ts.', '')};`).join('\n'));

// Get symbols for different types from generator.
let schema = generator.getSchemaForSymbol('ts.AggregateInterfaceForJsonSchemaExtraction');

const tokenMap = new Map<string, string>();
for(const [key, value] of Object.entries(schema.definitions)) {
    if(key.match(/^ts\.NodeArray_\d+$/)) {
        schema.definitions[key] = {$ref: '#/definitions/ts.NodeArray'};
    }
    if(key.match(/^ts\.NodeArray$/)) {
        schema.definitions[key] = {
            TODO: 'THIS IS AN ARRAY OF NODE PLUS OTHER FIELDS'
        };
    }

    const match = key.match(/^ts\.Token\.TKind(_\d+)?$/);
    if(match && value && value.$ref) {
        console.dir({key, value});
        const match2 = (value as any).$ref.match(/^#\/definitions\/ts\.SyntaxKind\.(.+)$/);
        tokenMap.set(key, match2[1]);
    }
}

schema = JSON.parse(JSON.stringify(schema, (key, value) => {
    if(value && value.$ref && tokenMap.has(value.$ref)) {
        return {$ref: tokenMap.get(value.$ref)};
    }
    return value;
}));
schema = JSON.parse(JSON.stringify(schema, (key, value) => {
    if(value && value.$ref) {
        while(true) {
            const path = value.$ref.replace(/^#\//, '').split('/');
            const target = get(schema, path);
            if(target && target.$ref) value = target;
            else break;
        }
        return value;
    }
    return value;
}));

const json = JSON.stringify(schema);
for(const [key, value] of Object.entries(schema.definitions)) {
    if(!json.includes(JSON.stringify(`#/definitions/${ key }`))) {
        delete schema.definitions[key];
    }
}

{
    const toRemove = [];
    for(const [key, value] of Object.entries(schema.definitions)) {
        const otherKey = `${key}_1`;
        const other = schema.definitions[otherKey];
        if(JSON.stringify(other) === JSON.stringify(value)) {
            toRemove.push(otherKey);
        }
    }
    toRemove.forEach(v => {delete schema.definitions[v]});
    console.dir(toRemove);
    let json = JSON.stringify(schema);
    for(const key of toRemove) {
        const keyTo = key.replace(/_1$/, '');
        const regexp = new RegExp(escapeRegExp(JSON.stringify(key).slice(1)), 'g');
        console.dir({key, regexp, keyTo});
        json = json.replace(regexp, JSON.stringify(keyTo).slice(1));
    }
    schema = JSON.parse(json);
}
{
    const keys = Object.keys(schema.definitions).filter(v => {
        return v.match(/^ts\.([^.]+)_1$/) && schema.definitions[v.replace(/_1$/, '')] === undefined;
    });
    let json = JSON.stringify(schema);
    for(const key of keys) {
        const keyTo = key.replace(/_1$/, '');
        const regexp = new RegExp(escapeRegExp(JSON.stringify(key).slice(1)), 'g');
        // console.dir({key, regexp, keyTo});
        json = json.replace(regexp, JSON.stringify(keyTo).slice(1));
    }
    schema = JSON.parse(json);
}

writeFileSync(resolve(__dirname, 'schema.json'), JSON.stringify(schema, null, 2));
// generator.getSchemaForSymbol("AnotherType");