const express = require("express");
const logger = require("morgan");
const path = require("path");
const mongoose = require("mongoose");
const routes = require("./api/routes");




const PORT = process.env.PORT || 3000;
const Workout = require("./models/workout");
const app = express();

app.use("/api", routes);
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




app.get("/exercise", (req, res) => {
  res.sendFile(path.join(__dirname + "/public/exercise.html"));
});

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname + "./public/index.html"));
});

app.listen(3000, () => {
  console.log(`App running on port ${PORT}!`);
});
