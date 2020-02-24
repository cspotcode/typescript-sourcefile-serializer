/*
 * Verify that the (de)serializer accurately re-constitutes identical `SourceFile` instances.
 */

import ts from 'typescript';
import {resolve} from 'path';
import * as Path from 'path';
import { readdirSync, readFileSync } from 'fs';
import { compareSourceFiles } from './diff-source-files';

const samplesDir = resolve(__dirname, '../samples');

async function main() {
    // Nested for loops build a "test matrix."  Body of innermost loop runs test case

    for(const file of readdirSync(samplesDir).filter(v => Path.parse(v).ext !== '.md')) {
        const sourceText = readFileSync(resolve(samplesDir, file), 'utf8');
        for(const scriptTarget of [
            ts.ScriptTarget.Latest
        ]) {
            for(const setParentNodes of [
                undefined,
                true,
                false
            ]) {
                for(const scriptKind of [
                    undefined,
                    ts.ScriptKind.TS,
                    ts.ScriptKind.TSX,
                    ts.ScriptKind.Unknown,
                ]) {
                    function createSourceFile() {
                        return ts.createSourceFile(file, sourceText, scriptTarget, setParentNodes, scriptKind);
                    }

                    console.dir({file, ScriptTarget: ts.ScriptTarget[scriptTarget], ScriptKind: ts.ScriptKind[scriptKind], setParentNodes});

                    const sourceFileA = createSourceFile();
                    const sourceFileB = createSourceFile();
                    compareSourceFiles(sourceFileA, sourceFileB);
                    console.log('Passed');
                }
            }
        }
    }
}

main().catch(e => {
    console.error(e);
    process.exit(1);
});