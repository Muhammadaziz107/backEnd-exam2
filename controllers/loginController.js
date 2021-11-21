const jwt = require("jsonwebtoken");
const SECRET_KEY = "secret_key";
const [data] = require("../model/users");

module.exports = {
  INTRO: (req, res) => {
    res.redirect("/login");
  },
  GET: (req, res) => {
    res.render("login.ejs");
  },
  LOGIN: (req, res) => {
    try {
      const { username, password } = req.body;
      const foundUser = data.find(
        (e) => e.name == username && e.pword == password
      );
      if (foundUser) {
        const token = jwt.sign({ username, password }, SECRET_KEY);

        if (foundUser.role == "student") {
          res.render("student.ejs", { token });
        }
        if (foundUser.role == "teacher") {
          res.render("teacher.ejs", { token });
        }
      } else {
        res.render("login.ejs");
      }
    } catch (err) {
      console.log(err);
    }
  },
};
