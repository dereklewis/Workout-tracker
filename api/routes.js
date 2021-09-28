const express = require("express");
const router = express.Router();
const Workout = require("../models/workout");

router.post("/workouts/", async ({ body }, res) => {
  
  Workout.create({ exercises: req.body.exercises })
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
});

// router.post("/workouts/", async ({ body }, res) => {
//     const newWorkout = new Workout;
//     Workout.create({
//       date: req.body,
//       exercises: {
//         type: req.body.type,
//         name: req.body.name,
//         duration: req.body.duration,
//         weight: req.body.weight,
//         reps: req.body.reps,
//         sets: req.body.sets,
//         duration: req.body.duration,
//         distance: req.body.distance,
//       }
//     }),
//     .then((newWorkout) => {
//       res.json(newWorkout);
//     })
//     .catch((err) => {
//       res.status(400).json(err);
//     });
// });




router.put("/workouts/:id", async (req, res) => {
  Workout.findByIdAndUpdate(
    { _id: req.params.id },
    { $push: { exercises: req.body } },
    { new: true }
  ),
    function (err, result) {
      if (err) {
        res.send(err);
      } else {
        res.json(Workout.findByIdAndUpdate());
      }
    };
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
