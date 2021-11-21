const express = require("express");
const app = express();
const PORT = process.env.PORT || 7777;
const ejs = require("ejs");
const path = require("path");
const routes = require("./controllers/routes");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(routes);

app.engine("ejs", ejs.renderFile);
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.listen(PORT, () => {
  console.log("server is ready on port: " + PORT);
});
