'use strict';

const fs = require('fs');
const paths = (['../assets/dracula.txt', '../assets/peterpan.txt', '../assets/siddhartha.txt']);


fs.readFile(paths[0], (err, data) => {
    let files = [];
    let str = data.toString();
    if (err) {
      if (err.code === 'EXIST') {
        console.error('myfile already exists');
        return;
      }
      throw err;
    }
    files.push(str);
    console.log(str);

fs.readFile(paths[1], (err, data) => {
    if (err) {
    if (err.code === 'EXIST') {
    console.error('myfile already exists');
    return;
    }
    throw err;
    }
    files.push(str);
    console.log(str);

fs.readFile(paths[2], (err, data) => {
    if (err) {
    if (err.code === 'EXIST') {
    console.error('myfile already exists');
    return;
    }
    throw err;
    }
    files.push(str);
    console.log(str);
    });
  });
});
