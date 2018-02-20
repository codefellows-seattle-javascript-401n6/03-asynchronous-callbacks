## reader()
The reader() takes in two parameters, an arrary of file paths and a cb function.  Its expected output is either an error or an array of the strings of the output of the files.

Successful operation of the reader function will process the file paths asynchronously and returns the output in an array.  The output is indexed in the array in the same index as the filepath array.

Unsuccessful operation of the reader function will result in an error output.  This event will happen when there is an invalid filepath in the array.  In the event of an invalid filepath, valid filepaths will not be processed either and the only output will be the error.