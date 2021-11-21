const lessons = require("../model/lessons");
module.exports = {
  GET: (req, res) => {
    res.render("addLesson.ejs");
  },
  POST: (req, res) => {
    const { lessonName, homework } = req.body;

    if (lessonName && homework) {
      lessons.push({
        lessonName,
        homework,
      });
    }
    res.redirect("/lessons");
  },
  GET1: (req, res) => {
    res.render("lessons.ejs", { lessons });
  },
  GET2: (req, res) => {
    res.render("students.ejs");
  },
  STUDENTGET: (req, res) => {
    res.send(lessons);
  },
};
