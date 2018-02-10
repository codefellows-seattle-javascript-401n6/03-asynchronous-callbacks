![CF](https://camo.githubusercontent.com/70edab54bba80edb7493cad3135e9606781cbb6b/687474703a2f2f692e696d6775722e636f6d2f377635415363382e706e67) 03: Parallel File Processing
===

## Submission Instructions
* Work in a fork of this repository
* Work in a branch on your fork
* Write all of your code in a directory named `lab-` + `<your name>` **e.g.** `lab-susan`
* Open a pull request to this repository
* Submit on canvas a question and observation, how long you spent, and a link to your pull request

## Resources  
  * [fs module docs](https://nodejs.org/api/fs.html)

## Configuration 
Configure the root of your repository with the following files and directories.
Thoughfully name and organize any aditional configuration or module files.
* **README.md** - contains documentation
* **.gitignore** - contains a [robust](http://gitignore.io) `.gitignore` file 
* **lib/** - contains module definitions
* **assets/** - contains the text files used by the program
* **test** - contains unit tests

## Feature Tasks  
#### Reader Module
In the lib/ directory create a reader.js module that exports a single function.
The reader module should take an array of three file paths and resolve a mapped
array of strings loaded from each file using an error-first callback. The
string data should be in the same order as the file path data (mapped). If an
error occurs it should immediatly reject the error using the callback and stop
execution.

* The reader module should have the function signature `(paths, callback) => undefined`
* On a failure the reader module should invoke the callback with an error `callback(error)`
* On success the reader module should invoke the callback with null as the
  first parameter, and the result as the second paramiter `callback(null,
  result)`

## Testing  
#### Reader Module Tests
* Use `describe` and `test` methods to define descriptive tests and increase readablity
* Each `test` callback should aim to test a small well defined feature of a function
* Write tests to ensure the reader function rejects errors with invalid file paths
* Write tests to ensure the reader function correctly resolves mapped string data for an array of file paths
* Write tests to make sure the order of the results matches the order of the
  files as they were passed in.

##  Documentation
In your README.md describe the exported values of each module you have defined.
Every function description should include it's arity (expected number of
parameters), the expected data for each parameter (data-type and limitations),
and it's behavior (for both valid and invalid use). Feel free to write any
additional information in your README.md.

## Stretch Goals
Write the reader function recursivly so that it will be able to support 0 or more paths.


