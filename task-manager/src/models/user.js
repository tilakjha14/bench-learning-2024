const mongoose = require("mongoose");
//const validator = require("validator");
const { default: isEmail } = require("validator/lib/isEmail");
const { Schema } = mongoose;

const User = mongoose.model(
  "Users",
  new Schema({
    name: { type: String, required: true, trim: true },
    email: {
      type: String,
      required: true,
      trim: true,
      lowercase: true,
      validate(value) {
        if (!isEmail(value)) throw new Error("Provide a valid email");
      },
    },
    age: {
      type: Number,
      default: 0,
      validate(value) {
        if (value < 0) {
          throw new Error("Age must be a positive number");
        }
      },
    },
    password: {
      required: true,
      type: String,
      minLength: 6,
      trim: true,
      validate(value) {
        if (value.includes("password"))
          throw new Error("Can't contain password ");
      },
    },
  })
);

module.exports = User;
