'use strict';

const fs = require('fs'),
  path = require('path'),
  _ = require('lodash');

const dir = process.argv[2],
  extension = '.' + process.argv[3];

fs.readdir(dir, (err, list) => {
  if (err) {
    console.log('ERROR', err);
  }
  _.forEach(list, (item) => {
    if (path.extname(item) === extension) {
      console.log(item);
    }
  });
});

