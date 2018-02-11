'use strict';

const fs = require('fs');

let Reader = {};

Reader.newFileArray = [];
Reader.readCount = 0;

Reader.errorCallback = (err) => {
  console.log('Error callback error', err);
}

Reader.read = (filePath, callBack, index, sendFileCB) => {
  fs.readFile(filePath, (err, data) => {
    if (err) Reader.errorCallback(err);
    Reader.readCallBack(null, data, index, sendFileCB);
  });
} 

Reader.readCallBack = (err, results, index, sendFileCB) => {
  if (err) errorCallback(err);
  let readBook = results.toString();
  Reader.newFileArray[index] = readBook;
  if (Reader.readCount === 3) {
    sendFileCB(false, Reader.newFileArray);
  }
}

Reader.readAll = (array, sendFileCB) => {
  if (array === null) {
    Reader.errorCallback(422);
  } else {
    for (let i = 0; i < array.length; i++) {
      let currentPath = array[i];
      Reader.readCount++;
      Reader.read(currentPath, Reader.readCallBack, i, sendFileCB);
    }
  }
}

module.exports = Reader;
