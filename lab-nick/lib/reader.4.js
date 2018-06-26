'use strict';

const fs = require('fs');

let list = ['small.txt', 'medium.txt', 'large.txt'];

// setTimeout(function(){ alert("Hello"); }, 3000);

function reader (array, cb) {
    let results = [];
    for ( let i = 0; i < array.length; i++) {

        fs.readFile(`../assets/${array[i]}`, (err, data) => {
            j = i
            if (err) {
                throw err;
                console.log(err);
            }
            let str = data.toString('utf-8');
            // results.push(str);
            results[j] = str;
            // console.log(str);

            if (results.length == array.length) {
                // result.sort == array
                cb(results)
            };
        });  
    };
};

reader(list, (results) => {
    console.log(results)
});

// reader(['fakeFile.txt'], (results) => {
//     console.log(results)
// });
module.exports = {};
module.exports.reader = reader;