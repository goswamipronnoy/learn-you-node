'use strict';

const http = require('http'),
  bl = require('bl');

http.get(process.argv[2], (response) => {
  const statusCode = response.statusCode;
  response.pipe(bl((err, data) => { // note 'new' isn't strictly required 
    // `data` is a complete Buffer object containing the full datails
  if (err) {
    return console.error(err);
  }
  let stringifiedData = data.toString();
  console.log(stringifiedData.length);
  console.log(stringifiedData);
  }));
});
