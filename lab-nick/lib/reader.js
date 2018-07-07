'use strict';

const fs = require('fs');

let list = ['small.txt', 'medium.txt', 'large.txt'];

// setTimeout(function(){ alert("Hello"); }, 3000);

function reader (text, cb) {
    let results = [];
    for ( let i = 0; i < text.length; i++) {

        fs.readFile(`../assets/${text[i]}`, (err, data) => {

            if (err) {
                throw err;
                console.log(err);
            }
            let str = data.toString();
            results.push(str);
            // console.log(str);

            if (results.length == text.length) {
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