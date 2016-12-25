'use strict';

const fs = require('fs');

const bufferObject = fs.readFileSync(process.argv[2]);
const bufferString = bufferObject.toString();
const newLineCount = bufferString.split('\n').length - 1;

console.log(newLineCount);

