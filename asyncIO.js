'use strict';

const fs = require('fs');
const bufferObject = process.argv[2];

fs.readFile(bufferObject, (err, result) => {
  if(err) {
    console.log('ERROR', err);
  }
  let lineCount = result.toString().split('\n').length - 1;
  console.log(lineCount);
});
