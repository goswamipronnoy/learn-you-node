'use strict';

const fs = require('fs'),
  path = require('path'),
  _ = require('lodash');

module.exports = (dirName, extension, callback) => {
  fs.readdir(dirName, (err, list) => {
    if (err) {
      return callback(err);
    }
    let temp = _.filter(list, (file) => {
      return path.extname(file) === '.' + extension;
    });
    return callback(null, temp);
  });
};
