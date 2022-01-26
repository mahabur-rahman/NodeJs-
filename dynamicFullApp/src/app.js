const express = require("express");
const path = require("path");
const hbs = require("hbs");
const app = express();
const port = process.env.PORT || 3000;

// console.log(path.join(__dirname, "../public"));
const staticPath = path.join(__dirname, "../public");
const templatePath = path.join(__dirname, "../templates/views");
const partialPath = path.join(__dirname, "../templates/partials");

// template engine hbs
app.set("view engine", "hbs");
app.set("views", templatePath);
hbs.registerPartials(partialPath);
// static website show
app.use(express.static(staticPath));

// routing

app.get("/", (req, res) => {
  //   res.send(`<h1>Home page</h1>`);
  res.render("index");
});

app.get("/about", (req, res) => {
  //   res.send("<h1>About page</h1>");
  res.render("about");
});

app.get("/contact", (req, res) => {
  //   res.send("<h1>Contact page</h1>");
  res.render("contact");
});

app.get("/weather", (req, res) => {
  //   res.send("<h1>Contact page</h1>");
  res.render("weather");
});

// error page
app.get("*", (req, res) => {
  //   res.send(`<h2>404, Not found page !</h2>`);
  res.render("error", {
    errorMsg: "OOps! Not found page",
    btnText: "Go Back",
  });
});

// listening app
app.listen(port, () => {
  console.log(`Server is running at https://localhost:${port}`);
});
