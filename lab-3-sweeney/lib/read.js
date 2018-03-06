'use strict';

// Readthreefiles(['../assets/file1.txt',
// '../assets/file2.txt',
// '../assets/file3.txt'],readCb);
const fs = require('fs');
const each = require('async-each');
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

  outputFile.push(file);
  console.log('file:',file);
};

each(inputFile, fs.readFile, readCb);

console.log('output array', outputFile);
// fs.readFile(inputFile[0], readCb);
// fs.readFile(inputFile[1], readCb);
// fs.readFile(inputFile[2], readCb);



module.exports.Readthreefiles;


// fs.readFile(inputFile[1], readCb(err, results));


// fs.readFile(inputFile[2], readCb(err, results));
