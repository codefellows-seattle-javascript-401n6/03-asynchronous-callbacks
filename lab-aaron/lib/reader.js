'use strict';
const fs = require('fs');

// function callback(err, result) {
//     if (err) throw err;
//     return result;
// }

// const paths = ['./file-1.txt', './file-2.txt', './file-3.txt'];
  
  
  function reader(paths, callback) {
        fs.fileReader((paths,data) => {
        let readFile = data.toString();
    })
    console.log(readFile);
    return readFile;
  }

  // fs.reader('./file-1.txt, ./file-2.txt, ./file-3.txt', (err, data) => {
  //   if (err) throw err;
  //   let str = data.toString();
  //   return str;
  // });

  module.exports = {};
  module.exports.reader = reader;
  // module.exports.callback = callback;