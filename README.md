# typescript-sourcefile-serializer

**WIP** Experiment to serialize / deserialize `SourceFile`s from an efficient binary format faster than parsing `.ts` source text.

If it works, it could enable faster startup of the ts compiler in `tsc`, `ts-node`, `ts-loader`, and anything else that needs to do typechecking.  Caching emitted code only works for transpile-only; if you want typechecking, then the compiler needs to have `SourceFile` instances in memory.  Today they can only be built via the parser.

## Misc ideas

### Boolean marshalling

For efficient boolean marshalling, maybe we don't need to be smart about where we put them in the output.
Every time we marshall a bit, it goes into the last marshalled bitfield with empty space.  If we run out of space,
then that's when we write a new bitfield and remember its index.

On the unmarshalling end of things, every time we unmarshall a bit, check if we have a previously-unmarshalled bitfield
with bits left in it.  If so, pull from there.
If not, we know this is exactly when the marshaller wrote a new bitfield to the file, so we read the next bitfield and use
it for the next 32 or 64 booleans.

Or we could allocate a large blob of bitfield space at the beginning of the file, and read from it as we're going.

### String marshalling

Use a lookup table?
All strings go into the table.  Then marshall indices for every string encountered.

