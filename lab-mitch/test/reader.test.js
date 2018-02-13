const add = require('../lib/fp.js').mapDemo;


describe("test if invalid file path for any text file", () => {
    describe("the function should return the contents of three separate txt files all at once", () => {
        let expected = [4, 16, 18, 24, 64, 100];
        it("Should return a new array with ", () => {
            let arr = [2, 8, 9, 12, 24, 32, 50];
            let result = mapDemo(arr, doubleEach);
            expect(result).toBe(expected);
        })
    })
})