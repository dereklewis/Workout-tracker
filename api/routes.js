const express = require("express");
const router = express.Router();
const Workout = require("../models/workout");

router.post("/workouts/", async (req, res) => {
  // console.log(req.body);
  Workout.create({})

    .then((workouts) => {
      res.json(workouts);
      // console.log(workouts);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
});

router.put("/workouts/:id", async (req, res) => {
  console.log(req.body + "19");
  console.log(req.params);
  Workout.findByIdAndUpdate(
    { _id: req.params.id },
    { $push: { exercises: req.body } },
    { new: true }
    
  )
  
  .then((result) => {
    console.log(result);
    res.json(result);
  })
  .catch((err) => {
    res.status(400).json(err);
  });
    
});

router.get("/workouts", (req, res) => {
  Workout.find({})
    .then((workouts) => {
      res.json(workouts);
    })
    .catch((err) => {
      res.json(err);
    });
});

module.exports = router;
