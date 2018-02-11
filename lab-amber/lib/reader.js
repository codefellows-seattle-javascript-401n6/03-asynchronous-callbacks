'use strict';

const fs = require('fs');

let Reader = {};

Reader.newFileArray = [];
Reader.readCount = 0;

Reader.errorCallback = (err, sendErrorCallBack) => {
  console.log('Error callback error', err);
  return err;
}

Reader.read = (filePath, callBack, index, sendFileCB, err) => {
  fs.readFile(filePath, (err, data) => {
    if (err) Reader.errorCallback(sendFileCB(undefined));
    Reader.readCallBack(null, data, index, sendFileCB);
  });
} 

Reader.readCallBack = (err, results, index, sendFileCB) => {
  if (results === undefined) {
    Reader.errorCallback(undefined);
  } else {
    let readBook = results.toString();
    Reader.newFileArray[index] = readBook;
    if (Reader.readCount === 3) {
      sendFileCB(false, Reader.newFileArray);
    }
    Reader.readCount++;
  }
}

Reader.readAll = (array, sendFileCB) => {
  if (array === null) {
    Reader.errorCallback(sendFileCB(null));
  } else {
    for (let i = 0; i < array.length; i++) {
      let currentPath = array[i];
      Reader.read(currentPath, Reader.readCallBack, i, sendFileCB);
    }
  }
}

module.exports = Reader;
