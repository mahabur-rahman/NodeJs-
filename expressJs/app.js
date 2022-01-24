const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("<h1>Home page</h1>");
});

app.get("/about", (req, res) => {
  res.send("<h2>About page</h2>");
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
