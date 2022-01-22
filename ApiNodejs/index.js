const http = require("http");
const fs = require("fs");
const PORT = 3000;

const server = http.createServer((req, res) => {
  const jsonData = fs.readFileSync(
    `${__dirname}/UserApi/userApi.json`,
    "utf-8"
  );
  //   console.log(jsonData);
  const data = JSON.parse(jsonData);
  //   console.log(data);

  if (req.url === "/") {
    res.end("<h1>Home Page</h1>");
  } else if (req.url === "/about") {
    res.end("<h1>About page</h1>");
  } else if (req.url === "/contact") {
    res.end("<h1>Contact page</h1>");
  } else if (req.url === "/userapi") {
    // fs.readFile(`${__dirname}/UserApi/userApi.json`, "utf-8", (err, data) => {
    //    console.log(data);
    //    const objData = JSON.parse(data);
    //    res.end(objData[0].address.street);
    // });

    res.writeHead(200, { "Content-type": "application/json" });

    res.end(data[0].name);
  } else {
    res.writeHead(404, { "Content-type": "text/html" });
    res.end("<h1>Not found page !</h1>");
  }
});

server.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
