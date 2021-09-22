const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const resistanceSchema = new Schema({
  exType: {
    type: String,
    required: true,
  },

  exName: {
    type: String,
    trim: true,
    required: "Exercise Name is required",
  },

  weight: {
    type: String,
    trim: true,
    required: "Weight is required",
  },

  sets: {
    type: Number,
    trim: true,
    required: "Number of Sets is required",
  },

  reps: {
    type: Number,
    trim: true,
    required: "Number of Reps is required",
  },

  duration: {
    type: Number,
    trim: true,
    required: "Number of minutes is required",
  },
});
