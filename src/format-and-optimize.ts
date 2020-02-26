/*
 * Cleanup codegen output with prettier and google closure compiler
 */

import {jsCompiler as ClosureCompiler} from 'google-closure-compiler';
import prettier from 'prettier';
import { promisify } from 'util';

export async function postprocessJsCode(code: string) {
    const pretty = prettier.format(code, {
        parser: 'babel'
    });

    const compiler = new ClosureCompiler({
        compilation_level: `ADVANCED`,
        // compilation_level: `SIMPLE`,
        assume_function_wrapper: true,
        module_resolution: 'NODE',
        language_in: 'ECMASCRIPT_NEXT',
        language_out: 'ECMASCRIPT_NEXT',
    });
    const ccResult = await promisify((cb) => {
        compiler.run([{
            path: 'marshaller.js',
            src: pretty
        }], (err, stdout, stderr) => {
            if(err)
                console.log(stdout, stderr);
            cb(err, stdout);
        });
    })();

    const optimized = `const window = exports;${ ccResult[0].src }`;

    return {
        pretty,
        optimized
    };
}