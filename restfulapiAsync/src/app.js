const express = require("express");
const Student = require("./models/students");
// db
require("./db/conn");
const app = express();
const port = process.env.PORT || 3000;

// app.get("/", (req, res) => {
//   res.send("<h1>Hello world my friend</h1>");
// });

// middleware
app.use(express.json());

// create a new students
// app.post("/students", (req, res) => {
//   console.log(req.body);
//   const user = new Student(req.body);
//   user
//     .save()
//     .then(() => {
//       res.status(201).send(user);
//     })
//     .catch((err) => {
//       res.status(400).send(err);
//     });
//      res.send("Hello Post method ");
// });

// to create async func 👍

app.post("/students", async (req, res) => {
  try {
    const user = new Student(req.body);
    const createUser = await user.save();
    res.status(201).send(createUser);
  } catch (e) {
    res.status(400).send(e);
  }
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
