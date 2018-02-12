"use strict"

const fs = require('fs');

// let arr = [`fileOne`,`fileTwo`,`fileThree`]
//get them to return in the right order//

let testArr = [`../assets/fileOne`,`../assets/fileTwo`,`../assets/fileThree`]

function theCallback(err, arrTwo){
    if(err) throw err
    console.log("file 1 was", arrTwo[0])
    console.log("file 2 was", arrTwo[2])
    console.log("file 3 was", arrTwo[3])
}

function callFirst(arr, callback){
      let arrTwo = [];    
   
        fs.readFile(arr[0], (err, data) => {
            if (err) throw err;
            let results = data.toString();
            console.log(results);
                arrTwo.push(results);   
          });

          //may want to add something that will break if the file takes to long.//

        setTimeout(function two(){  fs.readFile(arr[1], (err, data) => {
            if (err) throw err;
            let results = data.toString();
            console.log(results);
            arrTwo.push(results);  
         })},1000);

      
        setTimeout(function two(){  fs.readFile(arr[2], (err, data) => {
        if (err) throw err;
        let results = data.toString();
        console.log(results);
        arrTwo.push(results);  
        })},2000);

            callback(null,arrTwo); 
        }
          
       


callFirst(testArr,theCallback);


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