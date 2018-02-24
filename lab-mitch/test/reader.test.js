'use strict';

const readAll = require('../lib/reader.js');


describe("Test if the array containing the file paths is empty", () => {
    let expected = undefined;
    it("Should return an empty array", (resolve, reject) => {
        let pathArr = [];
        let result = readAll(pathArr, (err, results) => {
            expect(result).toEqual(expected);
            resolve();
        })
    })
});

describe.skip('Test if instead of array, there is NULL', () => {
    let expected = undefined;
    it('An error should be returned', (resolve, reject) => {
        let pathArr = null;
        let result = readAll(pathArr, (err, results) => {
            expect(results).toBe(expected);
            resolve();
        })
    })
});

describe.skip('Test if the array contains invalid file paths', () => {
    let expected = undefined;
    it('Should return a result of undefined', (resolve, reject) => {
        let pathArr = [
            `./assets/testFileOne.txt`,
            `./assets/FileTwo.txt`,
            `./assets/testFileThree.txt`
        ];
        readAll(pathArr, (err, results) => {
            expect(results).toEqual(expected);
            resolve();
        })
    })
})

describe.skip('Test with a correct array', () => {
    let expected = [
        `Title: War and Peace`,
        `Title: Metamorphosis`,
        `Title: The Iliad of Homer`
    ];
    it('Files should be returned in the correct order: War and Peace, Metamorphosis, The Iliad', (resolve, reject) => {
        let pathArr = [
            `./assets/testFileOne.txt`,
            `./assets/testFileTwo.txt`,
            `./assets/testFileThree.txt`
        ];
        readAll(pathArr, (err, results) => {
            expect(results[0].includes(expected[0])).toEqual(true);
            expect(results[1].includes(expected[1])).toEqual(true);
            expect(results[2].includes(expected[2])).toEqual(true);
            resolve();
        })
    })
});

