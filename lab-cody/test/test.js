'use strict';

const reader = require('../lib/reader').reader;

test('Log error to console', done => {
  let input = ['assets/beerjunction.txt', 'not a file', 'assets/short.txt'];
  let error = false;
  function callback(err, files) {
    if(err) {
      error = true;
      expect(error).toEqual(true);
      done();
    }
  }
  reader(input, callback);
});

test('Log valid maped array to console', done => {
  let input = ['assets/beerjunction.txt', 'assets/extrashort.txt', 'assets/short.txt'];
  function callback(err, files) {
    console.log(files);
    done();
  }
  reader(input, callback);
});

test('Make sure the order of the results matches the order of the files as they were passed in.', done => {
  let input = ['assets/extrashort.txt', 'assets/short.txt','assets/beerjunction.txt'];
  function callback(err, files) {
    console.log(files);
    expect(files[0]).toBe('extra short!\n');
    expect(files[1]).toBe('short!\n');
    expect(files[2]).toBe('beer junction!\n');
    done();
  }
  reader(input, callback);
});