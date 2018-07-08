'use strict';
const Reader = require('../lib/reader.js').Reader;
const paths = require('../lib/reader.js').paths;

describe('readfile Function', () => {
    it('It should show the three files passed into the paths array', (resolve, reject) => {
        let arr = ['../assets/dracula.txt', '../assets/peterpan.txt', '../assets/siddhartha.txt'];
        let result = arr;
        let expected = paths;
        expect(result).toEqual(expected);
        resolve();
    });
});


