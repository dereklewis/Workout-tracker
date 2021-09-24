
const express = require("express");
const Resistance = require("../models/resistance");


app.post("/api/workouts", ({ body }, res) => {
  db.Resistance.create(body)
    .then(Tracker => {
      console.log(Resistance);
      res.json(Tracker);
    })
    .catch(err => {
      res.json(err);
    });
});

module.exports = Resistance;