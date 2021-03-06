#!/usr/bin/env node

const {createRequire, createRequireFromPath} = require(`module`);
const {resolve} = require(`path`);

const relPnpApiPath = "../../../../.pnp.js";

const absPnpApiPath = resolve(__dirname, relPnpApiPath);
const absRequire = (createRequire || createRequireFromPath)(absPnpApiPath);

// Setup the environment to be able to require typescript/lib/tsc.js
require(absPnpApiPath).setup();

// Defer to the real typescript/lib/tsc.js your application uses
module.exports = absRequire(`typescript/lib/tsc.js`);
