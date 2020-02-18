// @ts-nocheck

import 'other';
import {foo} from 'other';
import foo = require('other');
import * as foo from 'other';
import foo from 'other';
export {foo};
export const foo = bar;
export var foo = bar;
export function foo() {}

for(let i = 0; i < 1; i++) noop;
labelHere:
for(let i = 0; i < 1; i++) {
    break labelHere;
    break;
}
for(const a of b) noop;
for(const a of b) {}
while(a) noop;
while(a) {}
do {} while(a);
do noop; while(a);

function foo() {}
function foo(): string {}
function foo(arg) {}
function foo(arg: string): string {}
function foo({a: b, c}) {}
function foo({a, b}) {}
function foo(...rest) {}
function foo({a: b, c}: Type) {}
function foo({a, b}: Type) {}
function foo(...rest: Type) {}
function foo<T>() {}
function foo<T extends Type>() {}
function foo<T>(): T {}
function foo<T extends Type>(): T {}

(
    function () {},
    function (): string {},
    function (arg) {},
    function (arg: string): string {},
    function ({a: b, c}) {},
    function ({a, b}) {},
    function (...rest) {},
    function ({a: b, c}: Type) {},
    function ({a, b}: Type) {},
    function (...rest: Type) {},
    function <T>() {},
    function <T extends Type>() {},
    function <T>(): T {},
    function <T extends Type>(): T {}
);

interface A {}
interface A extends B {}
class A implements B {}

for(let a of b) {
    if(a === 1) {a = 2}
}
