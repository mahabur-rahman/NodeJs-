const http = require("http");
const fs = require("fs");
const PORT = 3000;

const server = http.createServer();

server.on("request", (req, res) => {
  //   fs.readFile(`${__dirname}/readme.txt`, "utf-8", (err, data) => {
  //     if (err) {
  //       return console.log(err);
  //     }
  //     res.end(data);
  //   });

  //   2nd way 👍

  //   const readStream = fs.createReadStream("readme.txt");

  //   readStream.on("data", (chunkData) => {
  //     res.write(chunkData);
  //   });

  //   readStream.on("end", () => {
  //     res.end();
  //   });

  //   readStream.on("error", () => {
  //     console.log("not found");
  //     res.end("File not exist");
  //   });

  // 3rd way 👍
  const readStream = fs.createReadStream("readme.txt");
  readStream.pipe(res);
});

server.listen(PORT, "127.0.0.1", () => {
  console.log(`server is running at http://localhost:${PORT}`);
});
