const express = require("express");
const path = require("path");
const app = express();
const hbs = require("hbs");
const UserRegister = require("./models/registers");
// db connection
require("./db/conn");
const port = process.env.PORT || 3000;

const staticPath = path.join(__dirname, "../public");
const templatePath = path.join(__dirname, "../templates/views");
const partialPathLocation = path.join(__dirname, "../templates/partials");
// console.log(staticPath);

// middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(express.static(staticPath));
app.set("view engine", "hbs");
app.set("views", templatePath);
hbs.registerPartials(partialPathLocation);

// home page
app.get("/", (req, res) => {
  res.render("index");
  //   res.send("Hello world");
});

// register page
app.get("/register", (req, res) => {
  res.render("register");
});

// post method
app.post("/register", async (req, res) => {
  try {
    // console.log(req.body.firstname);
    // res.send(req.body.firstname);
    const password = req.body.password;
    const cPassword = req.body.confirmpassword;

    if (password === cPassword) {
      const usersInfo = new UserRegister({
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        email: req.body.email,
        gender: req.body.gender,
        phone: req.body.phone,
        age: req.body.age,
        password: password,
        confirmpassword: cPassword,
        // password: req.body.password,
        // confirmpassword: req.body.confirmpassword,
      });

      const userData = await usersInfo.save();
      res.status(201).render("index");
    } else {
      res.send("Password are not matching");
    }
  } catch (err) {
    res.status(400).send(err);
  }
});

//  login page
app.get("/login", (req, res) => {
  res.render("login");
});

// listen server at localhost:3000
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
