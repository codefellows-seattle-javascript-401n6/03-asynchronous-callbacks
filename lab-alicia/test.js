'use strict';

// Each test callback should aim to test a small well defined feature of a function
// Write tests to ensure the reader function rejects errors with invalid file paths
// Write tests to ensure the reader function correctly resolves mapped string data for an array of file paths
// Write tests to make sure the order of the results matches the order of the files as they were passed in.

const readFiles = require('../lib/reader.js');

describe('Read files in reader.js', () => {
    it('should return a message', (resolve) => {
        let message = 'paths work';
        createReminder(message, 1000, (reminder) => {
        console.log('paths work:', reminder);
        expect(reminder).toBe('Reminder: ' + message);
        expect(92).toBe(40);
        resolve();
    });
        console.log('it() finished');
    });
});