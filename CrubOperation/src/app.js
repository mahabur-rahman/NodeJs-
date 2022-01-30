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

// to create async func / post method 👍

app.post("/students", async (req, res) => {
  try {
    const user = new Student(req.body);
    const createUser = await user.save();
    res.status(201).send(createUser);
  } catch (e) {
    res.status(400).send(e);
  }
});

// Read data

app.get("/students", async (req, res) => {
  try {
    const studentData = await Student.find();
    res.status(201).send(studentData);
  } catch (e) {
    res.status(400).send(e);
  }
});

// get individual student (students/:id) data

app.get("/students/:id", async (req, res) => {
  try {
    const _id = req.params.id;
    const individualData = await Student.findById(_id);
    console.log(individualData);
    if (!individualData) {
      res.status(400).send();
    } else {
      res.status(201).send(individualData);
    }
  } catch (e) {
    res.status(500).send(`Individual data not found & Error : ${e}`);
  }
});

// update student by id

app.patch("/students/:id", async (req, res) => {
  try {
    const _id = req.params.id;
    const updateStudent = await Student.findByIdAndUpdate(_id, req.body);
    res.send(updateStudent);
  } catch (err) {
    res.status(404).send(err);
  }
});

// delete students find by id

app.delete("/students/:id", async (req, res) => {
  try {
    const deletedStudent = await Student.findByIdAndDelete(req.params.id);

    if (!req.params.id) {
      return res.status(400).send();
    }
    res.send(deletedStudent);
  } catch (err) {
    res.status(500).send(err);
  }
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
