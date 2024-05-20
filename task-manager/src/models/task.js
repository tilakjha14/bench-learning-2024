const mongoose = require("mongoose");

const { Schema } = mongoose;

const Tasks = mongoose.model(
  "Tasks",
  new Schema({
    description: {
      type: String,
      required: true,
      trim: true,
    },
    isCompleted: {
      type: Boolean,
      default: false,
    },
  })
);

module.exports = Tasks;
