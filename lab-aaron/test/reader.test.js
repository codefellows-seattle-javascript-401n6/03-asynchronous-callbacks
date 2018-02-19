'use strict';

// const paths = ['./file-1.txt', './file-2.txt', './file-3.txt'];

const reader = require('../lib/reader.js').reader;

// function callback(err, result) {
//   if (err) throw err;
//   return result;
// }

// function callback(err, result, data, i) {
//   // console.log(i);
//   if (err) {
//     cb(err)
//     return;
//   }
//   if (data) {
//     result[i] = data;  // Will fill the array in order of paths array
//     // result.push(data);//is only pushing the most recent data pulled from the files (will only push what finishes reading first)
//     // console.log(result)
//   }
//   // if(result.length === paths.length && result[i] !== '<1 empty item>') {
//   // console.log(result.length);
//   //   return 'finished';
//   // }
// }

describe('reader function', () => {
  it('should return a string of all file values', (resolve, reject) => {
    let paths = ['../assets/file-1.txt', '../assets/file-2.txt', '../assets/file-3.txt'];
    // let result = reader(paths, callback);
    let result = reader(paths, callback);
    let expected = []; //not really expecting an empty array
    // let expected = 'this is a message from aaron I am testing this code to see if this file text is mapped last in the array';
    // expect(result).toEqual(expected);
    expect(result).toBe(expected);
    resolve();
  });

  // it('should return an error', (resolve, reject) => {

    
    // reject();
  // })

});