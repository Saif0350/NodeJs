const fs = require("fs");
const path = require("path");
const dirPath = "D:/NodeJS/2dec2023/dispfilelist";

// fs.readdir(dirPath, (err, item) => {
//   console.log(item);
// });

// If you want a single file not in array

fs.readdir(dirPath, (err, items) => {
  items.forEach((item) => {
    console.log(`file name is ${item}`);
  });
});
