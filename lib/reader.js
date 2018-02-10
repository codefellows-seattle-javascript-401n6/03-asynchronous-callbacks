"use strict"

const fs = require('fs');

// fs.readFile(file[, options], callback)
//'${__dirname}` i want to use this but it keeps reading the lib folder//
//no such file or directory, open 'C:\Users\ix\401n9\Labs2\03-asynchronous-callbacks\lib\assets\fileTwo'//

fs.readFile(`../assets/fileTwo`, (err, data) => {
    if (err) throw err;
    console.log(data.toString());
  });