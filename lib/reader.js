"use strict"

const fs = require('fs');

// let arr = [`fileOne`,`fileTwo`,`fileThree`]
//get them to return in the right order//
let data = 'stuff and thigns'
function theCallback(err, data){
    if(err) throw err
console.log('callfirst will run, then callback')
}

function callFirst(callback){
    
    theCallback(new Error('it borked'),data)
}

callFirst(theCallback)


// old
// let arr = [`test`,`fileOne`,`fileTwo`,`fileThree`]

// function loadAll(files,cb){
//    let newFiles = [];
//     for(let i=0; i < files.length; i++){
//         fs.readFile(`../assets/${files[i]}`, (err, data) => {
//         if (err) throw err;
//         if (typeof data != 'string') throw 'eer';
//         let results = data.toString();
//         console.log(results);
//         newFiles.push(results);
//       });
//       if(newFiles.length == files.length){
//         cb(newFiles);
//         console.log(newFiles);
//     }
//     }
// }

// loadAll(arr,(newFiles)=>{
//     console.log(newFiles)
// })

// module.exports.loadAll = loadAll;