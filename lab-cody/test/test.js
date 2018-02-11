'use strict';
const reader = require('../lib/reader.js').reader;


describe('file reader function ', () => {
    it('should give an error for an incorrect filepath',() => {
      let str = 'faildamnit';
      let result = reader(str);
      let expected = undefined;
      expect(result).toBe(expected);
  
    })
  });
  
  describe('file reader function ', () => {
    it('ensure the reader function correctly resolves mapped string data for an array of file paths',() => {
      let str = 'short.text';
      let result = reader(str);
      let expected = 'short.text';
      expect(result).toBe(expected);
  
  
    })
  });
  
  describe('file reader function', () => {
    it('make sure the order of the results matches the order of the files as they were passed in',() => {
        reader(files, (list) => {
            console.log(list)
        });
    //   let str = 'world';
    //   let result = greet(str);
    //   let expected = 'hello ' + 'world';
    //   expect(result).toBe(expected);
    })
  })











