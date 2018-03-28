'use strict';

const Readthreefiles = (function(){
  const fs = require('fs');

  function readCb(err,results){ 
    if(err){
      console.log('there was an error reading text file');
    };

    let file = results.toString();

    outputFile.push(file);
    console.log('file:',file);
  };
  const inputFiles = [
    '../assets/file1.txt',
    '../assets/file2.txt',
    '../assets/file3.txt'
  ];

  const outputFiles = [];

  function completedAll() {
    console.log('completed all');
    return outputFiles;
  }

  let delay = 10000;
  const arrayOfPromises = Object.keys(inputFiles).map(file => (
    new Promise((resolve, reject) => {
      const content = fs.readFile(inputFiles[index]);
      console.log('request', content);
      setTimeout((err, resp, body) => {
        if (err) {
          reject(err);
        }

        // Some code for which I use object values
        resolve(file);
      }, (delay /= 2));
    }))
    .then(readCb));

  Promise.all(arrayOfPromises)
    .then(completedAll)
    .catch(console.error);


  console.log('output array', outputFile);
}());

module.exports.Readthreefiles;



