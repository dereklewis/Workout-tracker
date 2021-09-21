const express = require("express");
// const mongojs = require("mongojs");
const logger = require("morgan");
// const path = require("path");

const app = express();

app.use(logger("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

//example of database variables to make the database connection below
// const databaseUrl = "notetaker";
// const collections = ["notes"];


// const db = mongojs(databaseUrl, collections);

//database connection using the variables above
// db.on("error", error => {
//   console.log("Database Error:", error);
// });

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname + "./public/index.html"));
});






app.listen(3000, () => {
  console.log("App running on port 3000!");
});