const express = require("express");
const app = express();
const path = require("path");
const port = 3000;
const hbs = require("hbs");

// console.log(__dirname);
// console.log(path.join(__dirname, "../public"));
// const staticPath = path.join(__dirname, "../public");

// built in middleware

// app.use(express.static(staticPath));
const templatesPath = path.join(__dirname, "../templates");
// const partialPath = path.join(__dirname, "../templates/partials");
// to set hbs template engine

app.set("view engine", "hbs");
app.set("views", templatesPath);
// hbs.registerPartial(partialPath);

// template engine route
app.get("/", (req, res) => {
  res.render("index");
});

app.get("/about", (req, res) => {
  res.render("about");
});

// error page show
app.get("*", (req, res) => {
  res.render("notFound", {
    backToHome: "back to home",
  });
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
