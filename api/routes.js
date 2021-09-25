const express = require("express");
const router = express.Router();
const Workout = require("../models/workout");
// const Exercise = require("../public/exercise");
// const api = require("../public/api");



router.post("/workouts", async (req, res) => {
    Workout.create({})
    .then(workout => {
        res.status(201).json(workout)
    })
      .catch(({ message }) => {
      console.log(message);
    });
});

// router.put("/workouts", async (req, res) => {
//     Workout.create({})
//     .then(workout => {
//         res.status(201).json(workout)
//     })
//       .catch(({ message }) => {
//       console.log(message);
//     });
// });



module.exports = router;
