'use strict'

const fs = require('fs');

let reader = (paths, callback) => {
  let newArr = [];
  let counter = 0;

  paths.forEach((filePath, i) => {
    let maxWait = 2 * 1000;
    setTimeout(() => {
      fs.readFile(filePath, 'utf8', (err, data) => {
        if(err) {
          callback('Error: Plase make sure you input valid file paths.');
        }
        newArr[i] = data;
        counter++;
        if(counter === paths.length) {
          callback(null, newArr);
        }
      });
    }, maxWait);
  });
};

module.exports.reader = reader;
