const express = require("express");
let router = express.Router();

// app.put("/api/workouts", ({ body }, res) => {
//   Workout.create(body)
//     .then((Workout) => {
//       res.json(Workout);
//     })
//     .catch((err) => {
//       res.json(err);
//     });
// });

app.post("/workouts", ({ body }, res) => {
  Workout.create(body)
    .then((Workout) => {
      res.json(Workout);
    })
    .catch((err) => {
      res.json(err);
    });
});



module.exports = router;
