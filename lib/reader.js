"use strict"

const fs = require('fs');
console.log('hi')
// let arr = [`fileOne`,`fileTwo`,`fileThree`]
//get them to return in the right order//

let testArr = [`../assets/fileOne`,`../assets/fileTwo`,`../assets/fileThree`]

function theCallback(err, newArr){
    if(err) throw err
    console.log("file 1 was", newArr[0])
    console.log("file 2 was", newArr[1])
    console.log("file 3 was", newArr[2])
}


//write something that calls the user's callback after everything has loaded.//
function callFirst(arr, callback){
    console.log(arr);
    let counter = 0;
    let newArr = [];
        
        arr.forEach((e , i) =>{
            console.log('itteration of array', e);
                fs.readFile(e, (err, data) => {
                    if (err) handelData(callback(err));
                    handelData(null,data,i);
                    
          })
        });
        function handelData(err,data,i){
            if(err)throw err
            let results = data.toString();
            console.log('index',i);
            newArr[i] = results; 
                counter++
                 if(counter === newArr.length){
                    callback(null,newArr);
                     } 
        }
    };

callFirst(testArr,theCallback);



module.exports.testArr = testArr;
module.exports.theCallback = theCallback;
module.exports.callFirst = callFirst;