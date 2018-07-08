'use strict';

const fs = require('fs');
const paths = (['../assets/dracula.txt', '../assets/peterpan.txt', '../assets/siddhartha.txt']);

function readFile(paths, callback){
  let files = [];
  let fileCount = 0;

  function handleErr(err) {
    if (err) {
      callback(err);
      return;
    }
  }

  function handleData(data, i) {
      callback(data);
      files.push(data.toString('utf-8'));
      fileCount++;
      if (fileCount === paths.length){
        callback(null, files);
      }
  }

  function readFile() {
    for(let i = 0; i < paths.length; i++) {
      let str = paths[i];

      fs.readFile(str, (err, data) => {
        if (err) {
          handleErr(err);
        }
        handleData(data, i);
      });

    }
  }
readFile();  
}

readFile(paths, (err, data) => {
  if (err) console.log(err);
  console.log(data);
});



module.exports = { readFile, paths };