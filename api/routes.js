const express = require("express");
const router = express.Router();
const Workout = require("../models/workout");

router.post("/workouts", async ({ body }, res) => {
  Workout.create(body)
    .then((workout) => {
      res.json(workout);
    })
    .catch(({ message }) => {
      console.log(message);
    });
});

router.put("/workouts/:id", async (req, res) => {
    const excerciseId = req.params.id;

  Workout.findByIdAndUpdate(excerciseId, { excercises: []},
    

    { $push: { exercises: req.body}},
    
    function (err, result) {
      if (err) {
        console.log(err);
      }
      console.log("RESULT:" + result);
      res.json("Done");
    }
  );
});

router.get("/workouts", (req, res) => {
  Workout.find({})
    .sort({ date: -1 })
    .then((workout) => {
      res.json(workout);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
});

module.exports = router;
