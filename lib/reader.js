"use strict"

const fs = require('fs');

// fs.readFile(file[, options], callback)
//'${__dirname}` i want to use this but it keeps reading the lib folder//
//no such file or directory, open 'C:\Users\ix\401n9\Labs2\03-asynchronous-callbacks\lib\assets\fileTwo'//


// fs.readFile(`../assets/fileTwo`, (err, results) => {
//     if (err) throw err;
//     let str = results.toString();
//     consol.log(str) 
//   });

let arr = [`fileOne`,`fileTwo`,`fileThree`]

function loadAll(files,cb){
   let newFiles = [];
    for(let i=0; i < files.length; i++){
        fs.readFile(`../assets/${files[i]}`, (err, data) => {
        if (err) throw err;
        let results = data.toString();
        console.log(results);
        newFiles.push(results);
      });
      if(newFiles.length == files.length){
        cb(newFiles);
        console.log(newFiles);
    }
    }
}

loadAll(arr,(newFiles)=>{
    console.log(newFiles)
})