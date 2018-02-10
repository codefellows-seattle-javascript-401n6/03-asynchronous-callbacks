'use strict';


const fs = require('fs');
const inputFile = [
  '../assets/file1.txt',
  '../assets/file2.txt',
  '../assets/file3.txt'
];
const outputFile = [];

function readCb(err,results){ 
  if(err){
    console.log('there was an error reading text file');
  };

  let file = results.toString();

  return file;
  console.log('file:',file);
};

// outputFile[0] = fs.readFile(inputFile, readCb);
// outputFile[1] = fs.readFile(inputFile, readCb);
// outputFile[2] = fs.readFile(inputFile, readCb);

inputFile.forEach(function(){
  let output = fs.readFile(inputFile, readCb);
  console.log('output:', output);
  outputFile.push(output);
});




module.exports.Readthreefiles;


// fs.readFile(inputFile[1], readCb(err, results));


// fs.readFile(inputFile[2], readCb(err, results));
