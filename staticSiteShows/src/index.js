const express = require("express");
const app = express();
const port = 3000;
const path = require("path");

// console.log(path.join(__dirname, "../public/index.html"));
const staticPath = path.join(__dirname, "../public");
// middleware [ builtIn]
app.use(express.static(staticPath));

app.get("/", (req, res) => {
  res.send("<h1>Home page</h1>");
});

app.get("/about", (req, res) => {
  res.send("<h1>About page</h1>");
});

app.get("/contact", (req, res) => {
  res.send("<h1>Contact page</h1>");
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
