'use strict';

const fs = require('fs');

function readAll(filePaths, cb) {
    let readFinished = 0;
    let result = [];

    function whenDone(err, data, i) {
        if (err) {
            cb(err);
            return;
        }
        console.log("FILE", i, " has been read.")

        result[i] = data.toString('utf-8');
        readFinished++;
        if (readFinished === pathArr.length) {
            cb(null, result);
        }
    }

    filePaths.forEach((pathArr, i) => {
        fs.readFile(pathArr, (err, data) => {
            whenDone(err, data, i)
        })

    })
}

module.exports = readAll;