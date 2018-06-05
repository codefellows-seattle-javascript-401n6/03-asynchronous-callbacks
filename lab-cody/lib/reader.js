'use strict';

const fs = require('fs');

let reader = (paths, callback) => {
  let newArr = [];
  let numDone = 0;

  let handleDone = (err, data, i) => {
    newArr[i] = data;
    numDone++;
    if(err) {
      callback(err);
    }
    if(numDone === paths.length) {
      callback(null, newArr);
    }
  };

  paths.forEach((filePath, i) => {
    fs.readFile(filePath, 'utf8', (err, data) => {
      handleDone(err, data, i);
    });
  });
};

module.exports.reader = reader;