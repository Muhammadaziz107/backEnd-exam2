const express = require("express");
const Auth = require("./loginController");
const router = express.Router();
const Page = require("./pageController");

router
  .get("/", Auth.INTRO)
  .get("/login", Auth.GET)
  .post("/login", Auth.LOGIN)
  .get("/addLesson", Page.GET)
  .get("/lessons", Page.GET1)
  .get("/students", Page.GET2)
  .post("/addLesson", Page.POST);
module.exports = router;
