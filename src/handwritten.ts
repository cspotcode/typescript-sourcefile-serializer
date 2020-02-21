import * as ts from 'typescript';
const a = ts.SyntaxKind.YieldKeyword;

/*
 * types of objects to handle:
 * Token nodes (just means they have a given `kind` and are a `Node`)
 * 
 */
// all

type A = ts.Identifier