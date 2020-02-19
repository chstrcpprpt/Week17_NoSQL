const express = require("express");

const app = express();

//midleware


//routes
app.get("/", (req, res) => {
  res.send("This is the home page");
});

app.get("/workout", (req, res) => {
  res.send("This is the workout page");
});

//listening to server
app.listen(3000);
