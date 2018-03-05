'use strict';

const reader = require('../lib/reader.js');

describe('test to see if the array containing the file path is empty', () => {
    let expected = undefined;
    it('should return an empty array', (resolve, reject) => {
        let paths = [];
        let result = reader.readFile(paths);
            expect(result).toEqual(expected);
            resolve();
    })
});