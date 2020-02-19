const express = require("express");

const app = express();

//midleware - incoming request goes through this
app.use()

//routes
app.get("/", (req, res) => {
  res.send("This is the home page");
});

app.get("/workout", (req, res) => {
  res.send("This is the workout page");
});

//listening to server
const port = process.env.PORT || 3000;
app.listen(port);

module.exports = app;
