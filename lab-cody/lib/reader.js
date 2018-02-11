'use strict';

const fs = require('fs');

let files = ['extrashort.text','short.text','beerjunction.text'];

function reader(text, cb) {
    let list = [];
    for (let i = 0; i < text.length; i++) {

        fs.readFile(`../assets/${files[i]}`, (err, data) => {
            if (err) throw err;
            let str = data.toString();
            console.log(str);
            list.push(str);

            if (list.length == text.length) {
                cb(list)
            };
        });
    };

}
reader(files, (list) => {
    // console.log(list)
});

module.exports = {};
module.exports.reader = reader;
