'use strict';
const reader = require('../lib/reader.js').reader;











// example using done in "it" tests
it('true should be true', (done) => {
    setTimeount(() => {
      expect(true).toBe(true)
      done()
      // done('any value`) // passing a value into done makes the test fail
    }, 0)
    // invoking done here will be a false positive
  })