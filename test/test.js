"use strict"
const callFirst = require ('../lib/reader.js').callFirst;
const theCallback = require('../lib/reader.js').theCallback;
const testArr = require('../lib/reader.js').testArr;

describe("Testing that the files have loaded", ()=>{
    it('This test should pass true',(resolve,reject)=>{
        callFirst(testArr,theCallback)

        expect(typeof testArr[0] == 'string').toBe(true);
        expect(typeof testArr[1] == 'string').toBe(true);
        expect(typeof testArr[2] == 'string').toBe(true);
        resolve();
    })
})

