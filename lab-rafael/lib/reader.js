'use strict'

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
  }

  paths.forEach((filePath, i) => {
    fs.readFile(filePath, 'utf8', (err, data) => {
      handleDone(err, data, i);
    });
  });
};
// 
// reader(['/User/rafael/codefellows/401/lab-assignments/03-asynchronous-callbacks/lab-rafael/assets/frankenstein.txt', '/Users/rafael/codefellows/401/lab-assignments/03-asynchronous-callbacks/lab-rafael/assets/heart-darkness.txt', '/Users/rafael/codefellows/401/lab-assignments/03-asynchronous-callbacks/lab-rafael/assets/pride-prejudice.txt'], (err, files) => {
//   if(err) {
//     console.log(err);
//     return;
//   }
//   console.log(files);
// });
module.exports.reader = reader;
