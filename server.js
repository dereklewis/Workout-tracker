const express = require("express");
const logger = require("morgan");
const path = require("path");
const mongoose = require("mongoose");


const PORT = process.env.PORT || 3000;
const Resistance = require("./models/resistance");
const app = express();

app.use(logger("dev"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/trackerdb", { 
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
});

Resistance.create({ name: "Resistance" })
  .then(dbResistance => {
    console.log(dbResistance);
  })
  .catch(({ message }) => {
    console.log(message);
  });

  // Cardio.create({ name: "Cardio" })
  // .then(dbResistance => {
  //   console.log(dbResistance);
  // })
  // .catch(({ message }) => {
  //   console.log(message);
  // });

// app.post("/api/workouts", ({ body }, res) => {
//   Resistance.create(body)
//     .then(Tracker => {
//       console.log(Resistance);
//       res.json(Tracker);
//     })
//     .catch(err => {
//       res.json(err);
//     });
// });

app.get("/exercise", (req, res) => {
res.sendFile(path.join(__dirname + "/public/exercise.html"));

});

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname + "./public/index.html"));
});








app.listen(3000, () => {
  console.log(`App running on port ${PORT}!`);
});