'use strict';

// const paths = ['./file-1.txt', './file-2.txt', './file-3.txt'];

const reader = require('../lib/reader.js').reader;

function callback(err, result) {
  if (err) throw err;
  return result;
}

describe('reader function', () => {
    test('should return a string of all file values', () => {
      let paths = ['./file-1.txt', './file-2.txt', './file-3.txt'];
      // let result = reader(paths, callback);
      let result = reader()
      // let expected = result;
      let expected = ['this is a message from aaron I am testing this code to see if this file text is mapped last in the array'];
      expect(result).toBe(expected);
    });
});