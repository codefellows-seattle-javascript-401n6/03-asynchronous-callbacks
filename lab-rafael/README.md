Parallel File Processing

# Reader module
The reader function has an arity of 2, reader(paths, callback) takes an array of file paths and a callback function.
On a failure the reader module throws an error if any invalid paths are passed in.
If valid paths are provided, the callback function is run;

## Syntax
```javascript
reader(paths, callback(error[, array]);
```

## Parameters

paths
  array of file paths as strings
callback
  Function to execute for array data
