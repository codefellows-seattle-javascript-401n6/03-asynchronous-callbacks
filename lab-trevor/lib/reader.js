'use strict';

const fs = require('fs')

function reader(paths, cb) {
    let isFinished = 0
    let newArr = [];

    for(let i = 0; i < paths.length; i++){
        fs.readFile(paths[i], (err, data) => { 
            cb1(err, data, i)
        })
    }

    let cb1 = function (err, data, i) {
        if (err) {
            cb(err)
            return;
        };
        
        let str = data.toString();
        newArr[i] = str;
        isFinished++
        
        if(isFinished === paths.length){
            cb(null, newArr)
        }
    }
}

module.exports = {};
module.exports.reader = reader;
