'use strict';

const fs = require('fs');
const paths = (['../assets/dracula.txt', '../assets/peterpan.txt', '../assets/siddhartha.txt']);


fs.readFile('../assets/dracula.txt', (err, data) => {
    if (err) {
      if (err.code === 'EEXIST') {
        console.error('myfile already exists');
        return;
      }
  
      throw err;
    }
    let str = data.toString()
    console.log(str);
  });