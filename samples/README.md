(WIP)

Source code samples that cover every possible AST feature, to test that our (de)serializer works for all possible `.ts` and `.js` source code.

Samples may have type errors, because we only care about `SourceFile` instances as they come from the parser, not the binder nor checker.

TODO test `JSON` ASTs as well?
