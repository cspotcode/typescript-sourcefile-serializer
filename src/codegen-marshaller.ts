import * as astTypes from './ts-ast-types';
import {capitalize, upperFirst} from 'lodash';
import { Type, ArrayType, ObjectType, Prototype, AbstractType, UnionType, LiteralType, PrimitiveType } from './type-system';
import {outdent} from 'outdent';
import { writeFileSync } from 'fs';
import { resolve } from 'path';
import { postprocessJsCode } from './format-and-optimize';

async function main() {
    const allTypes = Object.keys(astTypes).map(exportName => {
        const type = astTypes[exportName] as Type;
        if(!(type instanceof AbstractType)) return null;
        type.preferredIdentifier = exportName;
        return type;
    }).filter(v => v);

    let acc = `
        function marshallBooleanType(v) {}
        function marshallNumberType(v) {}
        function marshallStringType(v) {}
        const NodeObject = function() {};
        //import assert from 'assert';
        function assert (mustBeTruthy) {}
        function hop(value, key) {return Object.prototype.hasOwnProperty.call(value, key)}
        export {marshallSourceFile};
        window.marshallSourceFile = marshallSourceFile;
        // exports.marshallSourceFile = marshallSourceFile;
    `;

    for(const type of allTypes) {
        acc += outdent `
            function ${ marshallerFnName(type) }(value) {
                ${ getMarshallerFunctionBody(type) }
            }

        `;
    }

    const {pretty, optimized} = await postprocessJsCode(acc);
    writeFileSync(resolve(__dirname, 'marshaller.js'), pretty);
    writeFileSync(resolve(__dirname, 'marshaller.min.js'), optimized);

    function getMarshallerFunctionBody(type: Type) {
        let acc = '';
        if(type instanceof ArrayType) {
            // TODO delegate to ObjectType marshaller
            // Then marshall the length, then marshall each item
        } else if(type instanceof ObjectType) {
            acc += `assert(value instanceof ${ prototypeIdentifier(type.prototype) });\n`;
            for(const prop of type.properties) {
                const getExpression = `value${ Number.isNaN(+prop.name) ? `.${ prop.name }` : `[${ prop.name }]` }`;
                if(prop.required) {
                    acc += outdent `
                        ${ marshallerFnName(prop.type) }(${ getExpression });

                    `;
                } else {
                    acc += outdent `
                        const exists_${ prop.name } = hop(value, ${ stringify(prop.name) });
                        if(exists_${ prop.name }) {
                            ${ marshallerFnName(prop.type) }(${ getExpression });
                        }

                    `;
                }
            }
        } else if(type instanceof UnionType) {
            // TODO emit runtime classification logic
            // emit number indicating which type within the Union is being serialized
            // emit value
            acc += outdent `
                switch(Object.getPrototypeOf(value)) {
            `;
            const instructions = type.getClassificationInstructions();
            for(const [proto, protoInstructions] of instructions.prototypeMap.entries()) {
                acc += outdent `
                    ${outdent}
                        case ${ prototypeIdentifier(proto) }:
                            // TODO
                `;
                acc += outdent `
                    ${outdent}
                        break;

                `;
            }
            acc += outdent `
                ${ outdent }
                    default:
                        throw new Error('unrecognized node in AST');
                }
            `;
        } else if(type instanceof LiteralType) {
            // skip; literals do not need to be marshalled since their value is locked and can be hardcoded in the unmarshaller
        } else if(type instanceof PrimitiveType) {
            // TODO marshall the value.
            // Do *NOT* marshall `typeof` because that is already known at this point, so unmarshaller will know what data type to expect.
        }
        return acc;
    }
}

function marshallerFnName(type: Type) {
    return `marshall${ upperFirst(type.getIdentifier()) }`;
}

function prototypeIdentifier(prototype: Prototype) {
    return Prototype[prototype];
}

function stringify(str: string) {
    return JSON.stringify(str);
}

main().catch(e => {
    console.error(e);
    process.exit(1);
});
