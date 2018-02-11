'use strict';

const reader = require('../lib/reader.js').reader;
const fs = require('fs')

describe('testing reader function', () => {
    describe('rejects errors with invalid file paths', () =>{
        it('it should return an error', () => {
            let arr = ['../assets/textt.txt', '../assets/text2.txt', '../assets/text3.txt'];
            let results;
            let readerCB = function (err, result){
                if(err){
                    results = err;
                    done();
                };
            }
            reader(arr, readerCB);
            
            function done(){
                expect(results).toEqual('error');
            }
        });
    });
    describe('correctly resolves mapped string data for an array of file paths', () =>{
        it('it should return string data', () => {
            let arr = ['../assets/text.txt', '../assets/text2.txt', '../assets/text3.txt'];
            let expected = ['1', '2', '3']
            let readerCB = function (err, result){
                return result;
                };
            let results = reader(arr, readerCB);
            expect(results).toEqual(expected);
        })
    })
    describe('the order of the results matches the order of the files as they were passed in', () =>{
        it('', () => {
            
        })
    })
})