#!/usr/bin/env ts-script
import {resolve} from "path";
import * as fs from "fs";

import * as TJS from "typescript-json-schema";

// optionally pass argument to schema generator
const settings: TJS.PartialArgs = {
    required: true
};

// optionally pass ts compiler options
const compilerOptions: TJS.CompilerOptions = {
    strictNullChecks: true
}

// optionally pass a base path
const basePath = resolve(__dirname, 'extracted-from-typescript');

const program = TJS.getProgramFromFiles([
    resolve(basePath, 'types.ts'),
    resolve(basePath, 'misc.ts')
], compilerOptions, basePath);

// ... or a generator that lets us incrementally get more schemas
const generator = TJS.buildGenerator(program, settings);

// all symbols
const symbols = generator.getUserSymbols();
const relevantSymbols = symbols.filter(v => v.startsWith('ts.'));

const ret = [...symbols] as any[];
for(const symbol of relevantSymbols) {
    try {
        ret.push(generator.getSchemaForSymbol(symbol));
    } catch(e) {}
}

fs.writeFileSync(resolve(__dirname, 'output.json'), JSON.stringify(ret, null, 2));

// Get symbols for different types from generator.
// generator.getSchemaForSymbol("MyType");
// generator.getSchemaForSymbol("AnotherType");