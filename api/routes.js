const express = require("express");
const router = express.Router();
const Workout = require("../models/workout");


router.post("/workouts/", async ({body}, res) => {
  Workout.create(body)
    .then(workouts => {
      res.json(workouts);
    })
    .catch(err => {
      res.status(400).json(err);
    });

});
router.put("/workouts/:id", async (req, res) => {
  Workout.findByIdAndUpdate(
    { _id: req.params.id },
    { $push: { exercises: req.body } },
    function (err, result) {
      if (err) {
        res.send(err);
      } else {
        res.json(workouts);
      }
    }
  );
});
router.get("/workouts", (req, res) => {
    Workout.find({})
    .then(workouts => {
        res.json(workouts);
    })
    .catch(err => {
        res.json(err);
    });
});


module.exports = router;