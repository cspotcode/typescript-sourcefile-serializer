import * as ts from 'typescript';
/*
 * To serialize a field:
 * 
 * if optional, check if field is missing / value is undefined
 * get type of field
 * if type of union, how to classify?
 *  if subtypes of union have identical prototype, need a way to differentiate (`kind` field?)
 */

function createMarshaller() {
    // For now, serialize to an array of primitive values.
    // In the future, optimize by writing to an efficient binary format
    let serialized: any[];

    function marshall(sourceFile: ts.SourceFile) {
        serialized = [];
        marshallSourceFile(sourceFile);
        return JSON.stringify(serialized);
    }

    // code-gen'd marshallers go here

    return marshall;
}