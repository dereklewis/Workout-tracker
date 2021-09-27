const express = require("express");
const router = express.Router();
const db = require("../models");


db.Workout.create({ name: "workout" })
.then(dbWorkout => {
    console.log(dbWorkout);
})
.catch((err) => {
    res.json(err);
});

app.get("/api/workout", (req, res) => {
    db.Workout.find({})
    .then(dbWorkout => {
        res.json(dbWorkout);
    })
    .catch(err => {
        res.json(err);
    });
});

router.post("/api/workouts", async ({body}, res) => {
  db.Workout.create(body)
  .then(({_id}) => Workout.findOneAndUpdate({}, { $push: { workouts: _id}}, { new: true }))
    .then((dbWorkout) => {
      res.json(dbWorkout);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
});


// router.get("/workouts", (req, res) => {
//   Workout.find({})
//     .sort({ date: -1 })
//     .then((workout) => {
//       res.json(workout);
//     })
//     .catch((err) => {
//       res.status(400).json(err);
//     });
// });

// module.exports = router;
