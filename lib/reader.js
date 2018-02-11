'use strict';

const readerMod = function(arr) {
    
}



module.exports = {};
module.exports.fp = fp;

//TODONE:In the lib/ directory create a reader.js module that exports a single function. 
//TODO:The reader module should take an array of three file paths and resolve a mapped array of strings loaded from each file using an error-first callback.
//TODO:The string data should be in the same order as the file path data (mapped).
//If an error occurs it should immediatly reject the error using the callback and stop execution.

//The reader module should have the function signature (paths, callback) => undefined
// On a failure the reader module should invoke the callback with an error callback(error)
// On success the reader module should invoke the callback with null as the first parameter, and the result as the second paramiter callback(null, result)