const fs = require('fs');

// let books = ['stevenson-jekyllandhyde.txt', 'disclmr.txt', 'moon.txt'];
let books = ['short.txt', 'med.txt', 'long.txt'];

function reader(text, cb) {
    let list = [];
    for (let i = 0; i < text.length; i++) {
        fs.readFile(`../assets/${books[i]}`, (err, data) => {

        })
    };

    function handler(text, err, i) {}
        if (err) {
            cb(err);
            return;
        }
        let str = data.toString();
        console.log(str);
        list[i] = str;

        if (list.length == text.length) {
            cb(null, list);
        };
}

reader(books, (list) => {});

module.exports = {};
module.exports.reader = reader;