const fs = require('fs');

function reader(paths, callback) {
  let newArr = [];
  let numDone = 0;

  function handleDone(error, data, i) {
    newArr[i] = data;
    numDone++;
    if (error) {
      callback(error);
    }
    if (numDone === paths.length) {
      callback(null, newArr);
    }
  }
  paths.forEach(function(filePath, i) {
    fs.readFile(filePath, 'utf8', function(error, data) {
      handleDone(error, data, i);
    });

  });
}

module.exports = reader;
