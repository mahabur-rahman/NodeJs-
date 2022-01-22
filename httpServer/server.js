const http = require("http");
const PORT = 3000;

// create server
const server = http.createServer((req, res) => {
  //   const url = req.url;
  //   console.log(url);
  if (req.url === "/") {
    res.end("<h1>Home Page</h1>");
  } else if (req.url === "/about") {
    res.end("<h1>About Page</h1>");
  } else if (req.url === "/contact") {
    res.end("<h1>Contact Page</h1>");
  } else {
    res.writeHead(404, { "Content-type": "text/html" });
    res.end("<h1>Page not found !</h1>");
  }
});

server.listen(PORT, "127.0.0.1", () => {
  console.log(`server is running at http://localhost:${PORT}`);
});
