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
    Workout.update(body)
    .then(workout => {
        res.json(workout);
    })
      .catch(({ message }) => {
      console.log(message);
    });
});



module.exports = router;
