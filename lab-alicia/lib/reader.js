'use strict';

const fs = require('fs');

module.exports.reader = reader;

function reader(paths, cb) {

    if (paths.length === 0 || paths === null)
        return cb('paths is undefined');

    function viewer(err, result, i) {
        if(err) {
            cb(err)
            return    
        };
        txtFiles[i] = result.toString();
        let counter = 0
        counter += 1;
        if (counter === paths.length) {
            cb(null, result)
        }
    }

    let txtFiles = [];

    paths.forEach((path, i) => {
        fs.readFile(path, (err, result) => {
            if(err) {
                viewer(err) // catches all files and returns with a callback or error; one function handles everything
                return
            };
            viewer(null, result, i)
        })
    })
}

reader(['../assets/book.txt', '../assets/script.txt', '../assets/list.txt']);

// are all paths finished reading and make sure the results are in the right order 
// once finished and no errors return all results to the cb.

//how do i track when whole thing is done