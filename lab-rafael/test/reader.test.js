'use strict';

const reader = require('../lib/reader').reader;

test('Log error to console', done => {
  let input = ['assets/frankenstein.txt', 'not-file', 'assets/pride-prejudice.txt'];
  function callback(err, files) {
    if(err) {
      console.log(err);
      expect(err).toBe('Error: Plase make sure you input valid file paths.');
      done();
    }
  }
  reader(input, callback);
});

test('Log valid maped array to console', done => {
  let input = ['assets/frankenstein.txt', 'assets/heart-darkness.txt', 'assets/pride-prejudice.txt'];
  function callback(err, files) {
    console.log(files);
    done();
  }
  reader(input, callback);
});

test('Make sure the order of the results matches the order of the files as they were passed in.', done => {
  let input = ['assets/frankenstein.txt', 'assets/heart-darkness.txt', 'assets/pride-prejudice.txt'];
  function callback(err, files) {
    expect(files[0]).toBe('frankenstein!\n');
    expect(files[1]).toBe('heart of darkness!\n');
    expect(files[2]).toBe('pride and prejudice!\n');
    done();
  }
  reader(input, callback);
});
