// // recommended lab approach
// // use fs.readFile to read one file
// // use fs.readFile to read three files
// // now try to maintain order (you'll find it comes back out of order => need to deal with it)

// readerCb(err, results) {
//     console.log(“file 1 was”, results[0])
//     console.log(“file 2 was”, results[1])
//     console.log(“file 3 was”, results[2])
// };
// //               LARGE     MED       SMALL
// readThreeFiles(["file1", "file2", "file3"], readerCb) // Asynchronous does these 3 things simultaneously. Won't come back in the same order since the file sizes are all different and will come back at different speeds.

// ---> fs.readFile(f1, fileReadCB)
// ---> fs.readFile(f2, fileReadCB)
// ---> fs.readFile(f3, fileReadCB)
