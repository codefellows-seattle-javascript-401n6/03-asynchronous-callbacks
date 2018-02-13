'use strict';

const fs = require('fs');

let fileList = ['txtSmall.txt', 'txtMedium.txt', 'txtLarge.txt'];

function readFiles(text, cb) {
    let allFilesReturned = [];
    for (let i = 0; i < text.length; i++) {
        fs.readFile(`../assets/${text[i]}`, (err,data) => {
            if (err) {
                throw err;
                console.log(err);
            }

            let str = data.toString();
            allFilesReturned.push(str);

            if (allFilesReturned.length == text.length) {
                cb(allFilesReturned);
            };
        })
    }
}
readFiles(fileList, (allFilesReturned) => {
    console.log(allFilesReturned);
})



// const readFiles = () => {

//     fs.readFile('../assets/testFileOne.txt', (err, data) => {
//         if (err) throw err;
//         let testFileOneToString = data.toString();
//         console.log(testFileOneToString);
//         return testFileOneToString;
//     });

// }