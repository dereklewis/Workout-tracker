const express = require("express");
// const mongojs = require("mongojs");
const logger = require("morgan");
const path = require("path");
const mongoose = require("mongoose");

const PORT = process.env.PORT || 3000;
const db = require("./models/resistance");
const app = express();

app.use(logger("dev"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workouts", { useNewUrlParser: true });

db.Resistance.create({ name: "Workout Tracker" })
  .then(dbResistance => {
    console.log(dbResistance);
  })
  .catch(({message}) => {
    console.log(message);
  });



app.get("/exercise", (req, res) => {
res.sendFile(path.join(__dirname + "/public/exercise.html"));

});

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname + "./public/index.html"));
});








app.listen(3000, () => {
  console.log("App running on port 3000!");
});