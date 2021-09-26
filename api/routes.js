const express = require("express");
const router = express.Router();
const Workout = require("../models/workout");

// const Exercise = require("../public/exercise");
// const api = require("../public/api");



router.post("/workouts", async ({body}, res) => {
    Workout.create(body)
    .then(workout => {
        res.json(workout);
        
    })
      .catch(({ message }) => {
      console.log(message);
    });
});

router.put("/workouts/:id", async ({body}, res) => {
    Workout.updateOne(body)
    .then(workout => {
        res.json(workout);
    })
      .catch(({ message }) => {
      console.log(message);
    });
});

router.get("/workouts", (req, res) => {
  Workout.find({})
    .sort({ date: -1 })
    .then(workout => {
      res.json(workout);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});


module.exports = router;
