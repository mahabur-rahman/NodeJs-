const express = require("express");
const router = new express.Router();
const Student = require("../models/students");

// to create async func / post method 👍

router.post("/students", async (req, res) => {
  try {
    const user = new Student(req.body);
    const createUser = await user.save();
    res.status(201).send(createUser);
  } catch (e) {
    res.status(400).send(e);
  }
});

// Read data

router.get("/students", async (req, res) => {
  try {
    const studentData = await Student.find();
    res.status(201).send(studentData);
  } catch (e) {
    res.status(400).send(e);
  }
});

// get individual student (students/:id) data

router.get("/students/:id", async (req, res) => {
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

router.patch("/students/:id", async (req, res) => {
  try {
    const _id = req.params.id;
    const updateStudent = await Student.findByIdAndUpdate(_id, req.body);
    res.send(updateStudent);
  } catch (err) {
    res.status(404).send(err);
  }
});

// delete students find by id

router.delete("/students/:id", async (req, res) => {
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

module.exports = router;
