'use strict';

const myFunc = require('./utils/helperFiteredLS'),
  _ = require('lodash'),
  dir = process.argv[2],
  extension = process.argv[3];

myFunc(dir, extension, (err, list) => {
  if (err) {
    return console.log('ERROR', err);
  }
  _.forEach(list, (item) => {
    console.log(item);
  });
});

