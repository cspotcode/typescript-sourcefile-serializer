/*
 * To test that (de)serializer works,
 * we need to parse source text, serialize, deserialize, then
 * deeply compare the result to the original SourceFile, ensuring
 * it is completely identical, including property ordering and 
 * __proto__s
 */

import {SourceFile} from 'typescript';
import assert from 'assert';

/**
 * Assert that 2 `SourceFile` are identical.
 */
export function compareSourceFiles(sourceFileA: SourceFile, sourceFileB: SourceFile) {
    /** Map from object in A to equivalent object in B */
    const aToBMapping = new Map<any, any>();

    visit(sourceFileA, sourceFileB, {prop: 'root', parentPath: undefined});

    interface Path {
        prop: string;
        parentPath: Path | undefined;
    }
    function stringifyPath(path: Path) {
        let acc = '';
        while(path) {
            acc = path.prop + '.' + acc;
            path = path.parentPath;
        }
        return acc;
    }

    function visit(valueA: any, valueB: any, path: Path) {
        try {
            // primitives are strictly equal
            if(['string', 'number', 'boolean'].includes(typeof valueA) || valueA == null) {
                assert.strictEqual(valueA, valueB, 'primitive values are identical');
                return;
            }

            // if we've already encountered valueA, make sure it matches previously-encountered valueB
            if(aToBMapping.has(valueA)) {
                assert.strictEqual(aToBMapping.get(valueA), valueB, 're-encountered values match previous encounter');
                return;
            }

            aToBMapping.set(valueA, valueB);

            // prototypes match
            assert(Object.getPrototypeOf(valueA) === Object.getPrototypeOf(valueB), 'prototypes match');

            const propertiesOfA = Object.getOwnPropertyNames(valueA);
            const propertiesOfB = Object.getOwnPropertyNames(valueB);
            assert.deepStrictEqual(propertiesOfA, propertiesOfB, 'have same properties in the same order');
            for(const prop of propertiesOfA) {
                visit(valueA[prop], valueB[prop], {prop, parentPath: path});
            }
        } catch(e) {
            throw new Error(`Failure at ${ stringifyPath(path) }:\n${ e }`);
        }
    }
}