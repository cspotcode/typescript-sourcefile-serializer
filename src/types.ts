import {get, uniqueId} from 'lodash';
import { outdent } from 'outdent';
import assert from 'assert';
import { createProxy } from './forward-reference-proxy';
import * as util from 'util';

export const allTypes = new Map<string, Type>();

export type Type = UnionType | ObjectType | IntersectionType | ArrayType | LiteralType<any> | PrimitiveType;
export abstract class AbstractType {
    constructor() {
        allTypes.set(this.id, this as unknown as Type);
    }
    preferredIdentifier: string | undefined = undefined;
    id = uniqueId();
    getIdentifier(): string {
        if(this.preferredIdentifier != null) return this.preferredIdentifier;
        return this.generateIdentifier();
    };
    protected generateIdentifier(): string {
        return `type${ this.id }`;
    };
    abstract getCreateExpression(): string;
}
export class IntersectionType extends AbstractType {
    constructor(types: Type[] = []) {
        super();
        this.types.push(...types);
    }

    types: Type[] = [];

    generateIdentifier() {
        return `intersection${this.id}`;
    }
    getCreateExpression() {
        return outdent `
            new IntersectionType([${this.types.map(v => proxyGetExpression(v)).join(',\n')}])
        `;
    }
}
export class UnionType extends AbstractType {
    constructor(types: Type[] = []) {
        super();
        this.types.push(...types);
    }
    types: Type[] = [];
    getCreateExpression() {
        return outdent `
            new UnionType([${this.types.map(v => proxyGetExpression(v)).join(', \n')}])
        `;
    }
}
export class ObjectType extends AbstractType {
    constructor(properties: ObjectProperty[] = []) {
        super();
        this.properties.push(...properties);
    }
    properties: ObjectProperty[] = [];
    getPropertiesCreateExpression() {
        return outdent `
            [
                ${this.properties.map(v => outdent `
                    ${outdent}
                        new ObjectProperty(${JSON.stringify(v.name)}, ${v.required}, ${ proxyGetExpression(v.type) }),

                `).join('')}]
        `;
    }
    getCreateExpression() {
        return outdent `
            new ObjectType(${ this.getPropertiesCreateExpression() })
        `;
    }
}
export class ArrayType extends ObjectType {
    constructor(items: Type = [], properties: ObjectProperty[] = []) {
        super(properties);
        this.items = items;
    }
    items: Type;
    getCreateExpression() {
        return outdent `
            new ArrayType(${ proxyGetExpression(this.items) }, ${ this.getPropertiesCreateExpression() })
        `;
    }
}
export class ObjectProperty {
    constructor(name: string, required: boolean, type: Type) {
        this.name = name;
        this.type = type;
        this.required = required;
    }
    name: string;
    type: Type;
    required: boolean;
}
export class LiteralType<T> extends AbstractType {
    constructor(public value: T) {
        super();
    }
    generateIdentifier() {
        return `literalType${ `${ this.value }`.replace(/[-\.\<\>]/g, '_') }`;
    }
    getCreateExpression() {
        return outdent `
            new LiteralType(${ JSON.stringify(this.value) })
        `;
    }
}
export class PrimitiveType extends AbstractType {
    constructor(public name: string) {
        super();
    }
    generateIdentifier() {
        return `${ this.name }Type`;
    }
    getCreateExpression() {
        return `new PrimitiveType(${ JSON.stringify(this.name) })`;
    }
}
export const booleanType = new PrimitiveType('boolean');
export const stringType = new PrimitiveType('string');
export const numberType = new PrimitiveType('number');
export const unknownType = new PrimitiveType('unknown');

function proxyGetExpression(type: AbstractType) {
    return `proxy(() => ${type.getIdentifier()})`;
}
export function proxy(getter: () => Type): Type {
    return createProxy(
        () => {
            const t = getter();
            assert(t);
            return t;
        },
        {
            [util.inspect.custom]() {
                return getter();
            }
        }
    );
}