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

describe('Test with a correct array', () => {
  let expected = [
    'Title: Pride and Prejudice',
    'hello',
    'Title: The Peace Negotiations',
  ];
  it('this right order: pride and prejudice, hellow world, peace negotiations', (resolve, reject) => {
    let filePathArray = [
      `./assets/pride-prejudice.txt`,
      `./assets/hello.txt`,
      `./assets/peace-negotiations.txt`
    ];
    Reader.readAll(filePathArray, (err, results) => {
      console.log(results);
      expect(results[0].includes(expected[0])).toEqual(true);
      expect(results[1].includes(expected[1])).toEqual(true);
      expect(results[2].includes(expected[2])).toEqual(true);
      resolve();
    });
  })
});

describe('Test with an array that has an invalid path', () => {
  let expected = undefined;
  it('this right order: pride and prejudice, hellow world, peace negotiations', (resolve, reject) => {
    let filePathArray = [
      `./assets/pride-prejudice.txt`,
      `./assets/hello2.txt`,
      `./assets/peace-negotiations.txt`
    ];
    Reader.readAll(filePathArray, (err, results) => {
      expect(results).toEqual(expected);
      resolve();
    });
  })
});