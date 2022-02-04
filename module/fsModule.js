const http = require("http");
const port = process.env.PORT || 3000;
const statusCode = 200;
const fs = require("fs");

const server = http.createServer((req, res) => {
  fs.readFile("./readme.txt", (err, data) => {
    res.writeHead(statusCode, { "Content-type": "text/html" });
    res.write(data);
    return res.end();
  });
});

server.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
