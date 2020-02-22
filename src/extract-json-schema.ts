import {resolve} from "path";
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
console.dir(generator.getSchemaForSymbol('ts.AggregateInterfaceForJsonSchemaExtraction'));
// generator.getSchemaForSymbol("AnotherType");