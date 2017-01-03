'use strict';

const http = require('http');

http.get(process.argv[2], (response) => {
  const statusCode = response.statusCode;
  let error;
  if (statusCode !== 200) {
    error = new Error(`Request Failed.\n` + `Status Code: ${statusCode}`);
  }

  if (error) {
    console.log(error.message);
    response.resume();
    return;
  }

  response.setEncoding('utf8');
  response.on('data', console.log);
  response.on('error', console.error);
}).on('error', (e) => {
  console.log(`Got error: ${e.message}`);
});
