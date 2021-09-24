const express = require("express");
const logger = require("morgan");
const path = require("path");
const mongoose = require("mongoose");


const PORT = process.env.PORT || 3000;
const Workout = require("./models/workout");
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

Workout.create({ name: "Workout" })
  .then(Workout => {
    console.log(Workout);
  })
  .catch(({ message }) => {
    console.log(message);
  });


// app.post("/api/workouts", ({ body }, res) => {
//   Workout.create(body)
//     .then(Tracker => {
//       console.log(Workout);
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