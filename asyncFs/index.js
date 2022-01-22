const fs = require("fs");

// creating a new file

// fs.writeFile(
//   "readme.txt",
//   "This is readme file to generate automatically",
//   (err) => {
//     if (err) {
//       console.log(err);
//     } else {
//       console.log("Task is completed successfully");
//     }
//   }
// );

// append file

// fs.appendFile("readme.txt", ". Using node js 👍", (err) => {
//   console.log("Extra data added ");
// });

// read file

// fs.readFile("readme.txt", "utf-8", (err, data) => {
//      console.log(data.toString());
//     console.log(data);
//   if (err) {
//     console.log(err);
//   } else {
//     console.log(data);
//   }
// });

// rename file

// fs.rename("readme.txt", "demo.txt", (err) => {
//   console.log("file rename is successfully done !");
// });

// again creating a new file but practically deleted

// fs.writeFile(
//   "test.txt",
//   "this is demo text file but deleted after some time",
//   (err) => {
//     console.log("creating a new file the name of test.txt");
//   }
// );

// delete file

// fs.unlink("test.txt", (err) => {
//   console.log("file should be deleted ");
// });
