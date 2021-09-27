const express = require("express");
const router = express.Router();
const Workout = require("../models/workout");


router.post("/workouts/", async ({body}, res) => {
  Workout.create(body)
    .then(workout => {
      res.json(workout);
    })
    .catch(err => {
      res.status(400).json(err);
    });

});
router.put("/workouts/:id", async (req, res) => {
  Workout.findByIdAndUpdate(
    { _id: req.params.id },
    { $push: { exercises: req.body.exercises } },
    function (err, result) {
      if (err) {
        res.send(data);
      } else {
        res.send(data);
      }
    }
  );
});
router.get("/workouts", (req, res) => {
    Workout.find({})
    .then(workout => {
        res.json(workout);
    })
    .catch(err => {
        res.json(err);
    });
});

// router.post("/api/workouts", async ({body}, res) => {
//   db.Workout.create(body)
//   .then((req.params.id) => Workout.findOneAndUpdate({}, { $push: { workouts: _id}}, { new: true }))
//     .then((dbWorkout) => {
//       res.json(dbWorkout);
//     })
//     .catch((err) => {
//       res.status(400).json(err);
//     });
// });
module.exports = router;