'use strict';
const fs = require('fs');
//read all files with a function
//then use a callback function to return them all at once

// function callback(err, result) {
//   if (err) throw err;
//   return result.toString();
// }

const paths = ['assets/file-4.txt', 'assets/file-2.txt', 'assets/file-3.txt'];

//DEMO
// function reader(paths,cb) {

// let result = []
// let numFinished = 0;

//iterate through paths
//for each "path," retrieve data and store in empty array, result
//return data in order that matches order of files

// data.indexOf(paths)

// result[i] = data;//i maintains order here
// numFinished++;
// if(numFinished === paths.length) {
//   cb(null, result);
// }

// paths.forEach((filepath, i) => {
//   fs.readFile(filepath, (error, data) => {handleDone(err, data, i)})
//   //this is an asynchronous function
// })
// }
//DEMO END


function callback(err, result, data, i) {
  // console.log(i);
  if (err) {
    // console.error(err);
    throw (err);  // FIND OUT proper syntax for throw(err)
  }
  if (data) {
    result[i] = data;  // Will fill the array in order of paths array
    // result.push(data);//is only pushing the most recent data pulled from the files (will only push what finishes reading first)
    console.log(result)
  }
  // if(result.length === paths.length && result[i] !== <1 empty item>) {
  // console.log(result.length);
  //   return 'finished';
  // }
}


const reader = (paths, callback) => {
  let result = [];
  for (let i = 0; i < paths.length; i++) {
    // let cache = paths[i].toString(data);
    // console.log(i);
    // if(fs.existsSync(paths[i])){
    fs.readFile(paths[i], 'utf8', (err, data) => {
      if (err) {
        console.log(err);
      }
      // console.log(data, i);
      callback(err, result, data, i);
      // console.log(i);
    })
    // } else {
    // console.error(`file ${paths[i]} does not exist`);
    // break;
    // }
  }
  return result;//RETURNS AN empty array...find proper solution to return filled array
}
reader(paths, callback);

// let file = paths[i].toString();
// cache.push(file);
// return cache;
// fs.readFile(paths[i], function(err, data) {
//   if (err) callback(err);
//   cache += callback(null, result)
// })   
// return cache;

// reader(paths, (err, files) => {
// console.log(files);
// });

// fs.reader = ('../assets/file-1.txt', (err, data) => {
//   if (err) throw err;
//   let str = data.toString();//not all files are text, this forces the data to be converted to a string instead of raw code
//   return str;
// });

// fs.reader('./file-1.txt, ./file-2.txt, ./file-3.txt', (err, data) => {
//   if (err) throw err;
//   let str = data.toString();
//   return str;
// });

module.exports = {};
module.exports.reader = reader;