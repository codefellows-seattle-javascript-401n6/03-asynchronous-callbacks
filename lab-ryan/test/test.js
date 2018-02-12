const reader = require('../lib/reader.js').reader;

describe("reader function", () => {
    it("should reject errors with invalid file paths", () => {
        let arr = ['tevenson-jekyllandhyde.txt', 'isclmr.txt', 'oon.txt'];
        let result = reader(str);
        let expected = null;
        expect(result).toBe(expected); 
    });
    it("resolve mapped string data'", () => {
        let str = '';
        let result = reader(str);
        let expected = '';
        expect(result).toBe(expected); 
    })
    it("should return the files in proper order'", () => {
        let str = '';
        let result = reader(str);
        let expected = '';
        expect(result).toBe(expected); 
    })
});


// example using done in "it" tests
it('true should be true', (done) => {
    setTimeount(() => {
      expect(true).toBe(true)
      done()
      // done('any value`) // passing a value into done makes the test fail
    }, 0)
    // invoking done here will be a false positive
  })