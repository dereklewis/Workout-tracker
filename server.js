const express = require("express");
const logger = require("morgan");
const path = require("path");
const mongoose = require("mongoose");
const routes = require("./api/routes");

const PORT = process.env.PORT || 3000;
const Workout = require("./models/workout");
const app = express();

app.use(logger("dev"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false,
});

app.use("/api", routes);
app.get("/exercise", (req, res) => {
  res.sendFile(path.join(__dirname + "/public/exercise.html"));
});

app.get("/stats", async (req, res) => {
  res.sendFile(path.join(__dirname + "/public/stats.html"));
});

app.get("/", async (req, res) => {
  res.sendFile(path.join(__dirname + "./public/index.html"));
});

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});
