'use strict';
const fs = require('fs');

const reader = module.exports = {};
const paths = (['../assets/dracula.txt', '../assets/peterpan.txt', '../assets/siddhartha.txt']);

reader.readFile = (paths, callback) => {
  reader.files = [];
  reader.fileCount = 0;

  function handleErr(err) {
    if (err) {
      callback(err);
      return;
    }
  }
  
  function handleData(data, i) {
      callback(data);
      reader.files.push(data.toString('utf-8'));
      reader.fileCount++;
    
      console.log('Index: ', i);
      if (reader.fileCount === paths.length){
        callback(null, reader.files);
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

reader.readFile(paths, (err, data) => {
  if (err) console.log(err);
  console.log(data);
});


