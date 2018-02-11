'use strict';

const Reader = require('../lib/reader.js');

describe('Test with for an empty array', () => {
  let expected = [];
  it ('An empty array should be returned', () => {
    let filePathArray = [];
    let result = Reader.readAll(filePathArray, (err, results) => {
      expect(results).toBe(expected);
      resolve();
    })
  })
});

describe('Test with for null instead of an array', () => {
  let expected = undefined;
  it ('An error should be returned', () => {
    let filePathArray = null;
    let result = Reader.readAll(filePathArray, (err, results) => {
      expect(results).toBe(expected);
      resolve();
    })
  })
});

// HALFWAY WORKS
describe('Test with a correct array', () => {
  let expected = ['pride and prejudice', 'hello world!', 'peace negotiations'];
  it('this right order: pride and prejudice, hellow world, peace negotiations', (resolve, reject) => {
    let filePathArray = [`./assets/pride-prejudice.txt`, `./assets/hello.txt`, `./assets/peace-negotiations.txt` ];
    let result = Reader.readAll(filePathArray, (err, results) => {
      expect(results).toBe(expected);
      resolve();
    });
  })
});