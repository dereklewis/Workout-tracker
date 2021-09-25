const express = require("express");
const router = express.Router();
// const Workout = require("../models/workout");
// const Exercise = require("../public/exercise");
// const api = require("../public/api");



router.post("/workouts", async (req, res) => {
    console.info(req.body)
})

// router.post("/workouts", async ({ body }, res) => {
//   const workOut = new Workout(body);
// //   workOut.initExercise();
//   Workout.create(workOut)
//     .then((workout) => {
//       console.log(workout);
//     })
//     .catch(({ message }) => {
//       console.log(message);
//     });
// });

// router.post("/workouts", ({ body }, res) => {
//   Workout.create(body)
//     .then((Workout) => {
//       res.json(Workout);
//     })
//     .catch((err) => {
//       res.json(err);
//     });
// });

module.exports = router;
