'use strict';

const reader = require('../lib/reader.js');

describe('reader function', () => {
    it('should return error wrong paths', () => {
    let paths = ['../assets/dracula.txt', '../assets/not-a-file', '../assets/siddhartha.txt'];
    let expect = paths;
    let expected = error;
    expect(expect).toBe(expected);
    })
})