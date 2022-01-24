const express = require("express");
const app = express();
const port = 3000;
const path = require("path");

// console.log(__dirname);
// console.log(path.join(__dirname, "../public"));
const staticPath = path.join(__dirname, "../public");

app.use(express.static(staticPath));

app.get("/", (req, res) => {
  res.send("<h1>Hello World</h1>");
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
