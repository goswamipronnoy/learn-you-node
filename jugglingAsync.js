'use strict';

const http = require('http'),
  bl = require('bl');

let output = [],
  count = 0;

function helper(index) {
  http.get(process.argv[2 + index], (response) => {
    response.pipe(bl((err, data) => {
      if (err) {
        return console.error(err);
      }
      output[index] = data.toString();
      count++;
      if (count === 3)  {
        printOutput();
      }
    }));
  });
}

function printOutput() {
  for(let i = 0; i < 3; i++) {
    console.log(output[i]);
  }
}

for(let i = 0; i < 3; i++) {
  helper(i);
}
