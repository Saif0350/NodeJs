const fs = require("fs");
const path = require("path");
const dirPath = "D:/NodeJS/2dec2023/crudwithfs";
const filePath = `${dirPath}/kaif.txt`;
// fs.writeFileSync(`${dirPath}/naif.txt`, "This is the first file");

// for reading
// fs.readFile(filePath, "utf-8", (err, item) => {
//   console.log(item);
// });

// for updating
// fs.appendFile(filePath, "and file name is kaif.text ", (err) => {
//   !err ? console.log("file is updated") : console.log("file is not updated");
// });

// for deleting
fs.unlinkSync(`${dirPath}/naif.txt`);

// for renaming
// fs.rename(filePath, `${dirPath}/fruit.txt`, (err) => {
//   if (!err) {
//     console.log("file name is change");
//   }
// });
