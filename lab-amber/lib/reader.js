'use strict';

const fs = require('fs');

let Reader = {};

Reader.newFileArray = [];
Reader.readCount = 0;

Reader.errorCallback = (err, sendFileCB) => {
  sendFileCB(true, undefined);
}

Reader.read = (filePath, callBack, index, sendFileCB, err) => {
  fs.readFile(filePath, (err, data) => {
    if (data === undefined) {
      Reader.errorCallback(err, sendFileCB)
    } else {
      Reader.readCallBack(false, data, index, sendFileCB);
    }
  });
} 

Reader.readCallBack = (err, results, index, sendFileCB) => {
  if (results === undefined) {
    Reader.errorCallback(undefined, sendFileCB);
  } else {
    let readBook = results.toString();
    Reader.newFileArray[index] = readBook;
    if (Reader.readCount > 3) {
      sendFileCB(false, Reader.newFileArray);
    } else {
      Reader.readCount++;
    }
  }  
}

Reader.readAll = (array, sendFileCB) => {
  if (array === null) {
    Reader.errorCallback(undefined, sendFileCB);
  } else if(array.length === 0) {
    Reader.errorCallback(undefined, sendFileCB);
  } else {
    for (let i = 0; i < array.length; i++) {
      let currentPath = array[i];
      Reader.read(currentPath, Reader.readCallBack, i, sendFileCB, false);
    }
  }
}

module.exports = Reader;
