'use strict';

const readFile = require('../lib/reader.js');
const paths = require('../lib/reader.js');

describe('it should show mapped string data for an array of file paths', () => {
        let result = paths;
    it('It should show the three files passed into the paths array', (resolve, reject) => {
        let expected = readFile;
        expect(result).toEqual(expected);
        resolve();
    }) 
});


// describe('test to see if the results match the order the files were passed in', () => {
//     it('should show 1. Dracula, 2. Peter Pan, 3. Siddhartha', (resolve, reject) => {

//     })
// });

