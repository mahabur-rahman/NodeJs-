const express = require("express");
const app = express();
const port = process.env.port || 3000;

app.get("/about", (req, res) => {
  res.send("<h1>About page</h1>");
});

app.get("/contact", (req, res) => {
  res.send("<h1>contact page</h1>");
});

app.get("/", (req, res) => {
  res.send("<h1>Hello Mahabur</h1>");
});

app.get("*", (req, res) => {
  res.send("<h1>404, Not found page</h1>");
});

// 404 page

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
