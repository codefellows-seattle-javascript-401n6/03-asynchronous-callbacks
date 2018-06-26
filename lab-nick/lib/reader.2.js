'use strict';

const fs = require('fs');

// let list = ['small.txt', 'medium.txt', 'large.txt'];
let list = ['large.txt', 'small.txt', 'medium.txt'];

function reader(text, cb) {
    let results = [];
    for (let i = results.length; i < text.length; i++) {
        let stats = fs.statSync(`../assets/${text[i]}`)
        let fileSizeInBytes = stats.size
        // console.log(fileSizeInBytes);
        setTimeout(callReader, fileSizeInBytes / 8);

        function callReader() {
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
                    console.log(results.length);
                };
            });
        };
        
    };
};

reader(list, (results) => {
    console.log(results);
});

// reader(['fakeFile.txt'], (results) => {
//     console.log(results)
// });
module.exports = {};
module.exports.reader = reader;