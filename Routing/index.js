const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("<h1>Home Page</h1>");
});

app.get("/about", (req, res) => {
  res.status(200).send("<h1>About Page</h1>");
});

app.get("/contact", (req, res) => {
  res.status(200).send("<h1>Contact Page</h1>");
});

app.get("/blog", (req, res) => {
  res.send([
    {
      id: 1,
      name: "mahabur",
    },
    {
      id: 1,
      name: "mahabur",
    },
    {
      id: 1,
      name: "mahabur",
    },
  ]);
  //   res.write("<h1>Blog Page</h1>");
  //   res.write("<h1>Blog Page 2</h1>");
  //   res.send();
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
