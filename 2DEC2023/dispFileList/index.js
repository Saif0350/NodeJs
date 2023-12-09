const fs = require("fs");
const path = require("path");
// fs.writeFileSync("apple.txt", "this is saif alamstore");

// const dirPath = path.join(__dirname, "dispFileList");
const dirPath = "D:/NodeJS/2dec2023/dispfilelist";
for (i = 0; i < 5; i++) {
  // fs.writeFileSync(dirPath+"/hello" + i + ".txt", "a dynamic file");
  fs.writeFileSync(`${dirPath}/hello${i}.txt`, "a dynamic file");
}
