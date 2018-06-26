'use strict'

const fs = require('fs');

let reader = (location, cb) => {
  let newArr = [];
  let done = 0;

  let handleDone = (err, data, i) => {
    newArr[i] = data;
    done++;
    if(err) {
      cb(err);
    }
    if(done === location.length) {
      cb(null, newArr);
    }
  }

  location.forEach((filePath, i) => {
    fs.readFile(filePath, 'utf8', (err, data) => {
      handleDone(err, data, i);
    });
  });
};

module.exports.reader = reader;
