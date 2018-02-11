'use strict';

const Reader = require('../lib/reader.js');

// PASSING
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

// PASSING
describe('Test with for an array with just one item', () => {
  let expected = ['hello world!'];
  it ('An empty array should be returned', () => {
    let filePathArray = [`./assets/hello.txt`];
    let result = Reader.readAll(filePathArray, (err, results) => {
      expect(results).toBe(expected);
      resolve();
    })
  })
});

// PASSING
describe('Test with for null instead of an array', () => {
  let expected = undefined;
  it ('An error should be returned', (resolve, reject) => {
    let filePathArray = null;
    let result = Reader.readAll(filePathArray, (err, results) => {
      expect(results).toBe(expected);
      resolve();
    })
  })
});

// PASSING
describe('Test with an array that has an invalid path', () => {
  let expected = undefined;
  it('this right order: pride and prejudice, hellow world, peace negotiations', (resolve, reject) => {
    let filePathArray = [`./assets/pride-prejudice.txt`, `./assets/hello2.txt`, `./assets/peace-negotiations.txt` ];
    let result = Reader.readAll(filePathArray, (err, results) => {
      expect(results).toBe(expected);
      resolve();
    });
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