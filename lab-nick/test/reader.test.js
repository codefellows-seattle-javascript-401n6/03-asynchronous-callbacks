'use strict';

const reader = require('../lib/reader.js').reader;

test('file paths', () => {
    let result = reader(['fakeFile.txt']);
    let expected = err;
    expect(result).toBe(expected);
});

// describe('reader funtion', () => {
//     it('adds two numbers', () => {
//         expect (add(3,2)).toBe(5);
//     });
//     it('adds two numbers', () => {
//         expect (add("a",2)).toBe(null);
//     });
// });