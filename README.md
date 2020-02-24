# typescript-sourcefile-serializer

**WIP** Experiment to serialize / deserialize `SourceFile`s from an efficient binary format faster than parsing `.ts` source text.

If it works, it could enable faster startup of the ts compiler in `tsc`, `ts-node`, `ts-loader`, and anything else that needs to do typechecking.  Caching emitted code only works for transpile-only; if you want typechecking, then the compiler needs to have `SourceFile` instances in memory.  Today they can only be built via the parser.
