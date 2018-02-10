'use strict';


Readthreefiles([], readerCb);


function readerCb(arr,results){ 

  fs.readFile('../assets/file1.txt', yesOrno(err,results));
  fs.readFile('../assets/file2.txt', yesOrno(err,results));
  fs.readFile('../assets/file3.txt', yesOrno(err,results));

};

function yesOrno(err,results){

  if(err){
    console.log("there was an error reading text file")
  };

  if(results){
    readerCb(null,results);
  }

};

