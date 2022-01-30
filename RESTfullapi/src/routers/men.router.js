const express = require("express");
const MensRanking = require("../models/mens");
const router = new express.Router();

// create request
router.post("/mens", async (req, res) => {
  try {
    const mensRankingRecords = new MensRanking(req.body);
    console.log(req.body);

    const createRecords = await mensRankingRecords.save();
    res.status(201).send(createRecords);
  } catch (e) {
    res.status(400).send(e);
  }
});

// Read data
router.get("/mens", async (req, res) => {
  try {
    const readRecords = await MensRanking.find({}).sort({ ranking: 1 });
    res.send(readRecords);
  } catch (e) {
    res.status(400).send(e);
  }
});

// individual data find by id
router.get("/mens/:id", async (req, res) => {
  try {
    const _id = req.params.id;
    const singleRecord = await MensRanking.findById(_id);
    res.send(singleRecord);
  } catch (e) {
    res.status(400).send(e);
  }
});

// update data find by id
router.patch("/mens/:id", async (req, res) => {
  try {
    const _id = req.params.id;
    const updateData = await MensRanking.findByIdAndUpdate(_id, req.body, {
      new: true,
    });
    res.send(updateData);
  } catch (e) {
    res.status(500).send(e);
  }
});

// delete data find by id
router.delete("/mens/:id", async (req, res) => {
  try {
    const _id = req.params.id;
    const deletedData = await MensRanking.findByIdAndDelete(_id);
    res.send(deletedData);
  } catch (e) {
    res.status(500).send(e);
  }
});

module.exports = router;
