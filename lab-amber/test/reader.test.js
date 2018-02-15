'use strict';

const Reader = require('../lib/reader.js');

describe('Test with for an empty array', () => {
  let expected = undefined;
  it ('An empty array should be returned', (resolve, reject) => {
    let filePathArray = [];
    let result = Reader.readAll(filePathArray, (err, results) => {
      expect(results).toEqual(expected);
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

describe('Test with an array that has an invalid path', () => {
  let expected = undefined;
  it('Expected to return undefined', (resolve, reject) => {
    let filePathArray = [
      `./assets/pride-prejudice.txt`,
      `./assets/hello2.txt`,
      `./assets/peace-negotiations.txt`
    ];
    Reader.readAll(filePathArray, (err, results) => {
      expect(results).toEqual(expected);
      resolve();
    });
  });
});

describe('Test with a correct array', () => {
  let expected = [
    'Title: Pride and Prejudice',
    'hello',
    'Title: The Peace Negotiations',
  ];
  it('Expected to return items in right order: pride and prejudice, hello world, peace negotiations', (resolve, reject) => {
    let filePathArray = [
      `./assets/pride-prejudice.txt`,
      `./assets/hello.txt`,
      `./assets/peace-negotiations.txt`
    ];
    Reader.readAll(filePathArray, (err, results) => {
      expect(results[0].includes(expected[0])).toEqual(true);
      expect(results[1].includes(expected[1])).toEqual(true);
      expect(results[2].includes(expected[2])).toEqual(true);
      resolve();
    });
  });
});