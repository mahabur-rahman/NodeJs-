const fs = require("fs");
const http = require("http");
const port = process.env.PORT || 3000;
const stCode = 200;
// console.log(fs);

const server = http.createServer((req, res) => {
  fs.readFile("./index.html", (err, data) => {
    if (err) {
      console.log(err);
    } else {
      res.write(data);
    }
    res.end("");
  });
});

server.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
