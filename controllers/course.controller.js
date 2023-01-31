const express = require("express");
const router = express.Router();
const Course = require("../models/model.course.js");

router.get("/", async (req, res) => {
  try {
    const courses = await Course.find({}).lean().exec();
    res.send({ count: courses.length, data: courses });
  } catch (err) {
    console.log("Error", err);
  }
});

router.get("/:id", async (req, res) => {
  try {
    const course = await Course.find({ _id: req.params.id }).lean().exec();
    res.status(200).send({ data: course });
  } catch (err) {
    console.log("Error", err);
  }
});

router.post("/", async (req, res) => {
  try {
    const course = await Course.findOne({ name: req.body.name });
    if (course) {
      res.status(403).send("Course already exists");
    } else {
      const course = await Course.create(req.body);
      res.status(201).send({ data: course });
    }
  } catch (err) {
    console.log("Error", err);
  }
});

router.put("/:id", async (req, res) => {
  try {
    const course = await Course.findByIdAndUpdate(req.params.id, req.body);
    res.status(200).send({ data: course });
  } catch (err) {
    console.log("Error", err);
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const course = await Course.findByIdAndDelete(req.params.id);
    res.status(200).send({ data: course });
  } catch (err) {
    console.log("Error", err);
  }
});

module.exports = router;
