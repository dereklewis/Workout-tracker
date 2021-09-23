const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const CardioSchema = new Schema({
  exType: {
    type: String,
    required: true,
  },

  exName: {
    type: String,
    trim: true,
    required: "Exercise Name is required",
  },

  distance: {
    type: Number,
    trim: true,
    required: "Weight is required",
  },

  duration: {
    type: Number,
    trim: true,
    required: "Number of minutes is required",
  },
});

const Resistance = mongoose.model("Resistance", ResistanceSchema);

const Cardio = mongoose.model("Cardio", CardioSchema);