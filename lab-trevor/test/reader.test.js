'use strict';

const reader = require('../lib/reader.js').reader;
const fs = require('fs')

describe('testing reader function', () => {
    describe('rejects errors with invalid file paths', () =>{
        it('it should return an error', (resolve, reject) => {
            let arr = ['./assets/ttttext.txt', './assets/text2.txt', './assets/text3.txt'];
            let expected =  'no such file or directory'
            let readerCB = function (err){
                expect(err.message.includes('no such file or directory')).toBe(true);
                resolve();
            };
            reader(arr, readerCB);
        })
    });
    describe('correctly resolves mapped string data for an array of file paths', () =>{
        it('it should return string data', (resolve, reject) => {
            let arr = ['./assets/text.txt', './assets/text2.txt', './assets/text3.txt'];
            let expected = ['1', '2', '3']
            let readerCB = function (err, results){
                expect(results).toEqual(expected);
               
                resolve();
            };
            reader(arr, readerCB);
        })
    })
    describe('the order of the results matches the order of the files as they were passed in', () =>{
        it('', (resolve, reject) => {
            let arr = ['./assets/text2.txt', './assets/text.txt', './assets/text3.txt'];
            
            let readerCB = function (err, results){
                expect(results[0]).toEqual('2');
                expect(results[1]).toEqual('1');
                expect(results[2]).toEqual('3');
                resolve();
            };
            reader(arr, readerCB);
        })
    })
})