# Amber Kim: 401 Lab 03 Asynchronous Callbacks

## reader.js
* To run reader.js, import the file in your code. For example
```
const Reader = require('../lib/reader.js');
```
* The imported file will be an object that includes an "readAll" method.
```
Reader.readAll(array, callback);
```
* The readAll method expects an array of file path saved as Strings. For example:
```
`./assets/pride-prejudice.txt`
```
* and a callback function that will return the results. For example:
```
(err, results) => {
  expect(results).toEqual(expected);
};
```

### Notes
* Passing in an empty array will return an empty array
* Passing in null instead of a valid array will return undefined.
* Having an invalid path string in your array will return undefined.