'use strict';

const reader = require('../lib/reader');

test('Log error to console', done => {
  let input = ['assets/file1.txt', 'NOT A FILE!!!!!!', 'assets/file3.txt'];
  let error = false;

  function callback(err, files) {
    if (err) {
      error = true;
      expect(error).toEqual(true);
      done();
    }
  }
  reader(input, callback);
});

test('Log valid maped array to console', done => {
  let input = ['assets/file1.txt', 'assets/file2.txt', 'assets/file3.txt'];

  function callback(err, files) {
    console.log(files);
    done();
  }
  reader(input, callback);
});

test('Make sure the order of the results matches the order of the files as they were passed in.', done => {
  let input = ['assets/file1.txt', 'assets/file2.txt', 'assets/file3.txt'];

  function callback(err, files) {
    expect(files[0]).toBe('file1');
    expect(files[1]).toBe('file2');
    expect(files[2]).toBe('file3');
    done();
  }
  reader(input, callback);
});
