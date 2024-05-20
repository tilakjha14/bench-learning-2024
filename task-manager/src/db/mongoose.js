const mongoose = require("mongoose");
//const validator = require("validator");
const { default: isEmail } = require("validator/lib/isEmail");
const { Schema } = mongoose;

mongoose.connect("mongodb://127.0.0.1:27017/task-manager-api", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// const User = mongoose.model(
//   "Users",
//   new Schema({
//     name: { type: String, required: true, trim: true },
//     email: {
//       type: String,
//       required: true,
//       trim: true,
//       lowercase: true,
//       validate(value) {
//         if (!isEmail(value)) throw new Error("Provide a valid email");
//       },
//     },
//     age: {
//       type: Number,
//       default: 0,
//       validate(value) {
//         if (value < 0) {
//           throw new Error("Age must be a positive number");
//         }
//       },
//     },
//     password: {
//       required: true,
//       type: String,
//       minLength: 6,
//       trim: true,
//       validate(value) {
//         if (value.includes("password"))
//           throw new Error("Can't contain password ");
//       },
//     },
//   })
// );
// const me = new User({
//   name: " Tilak Jha     ",
//   email: "TJ@TJ.COm",
//   password: "dd  123  456",
// });

// me.save()
//   .then((result) => console.log(result))
//   .catch((error) => console.log("Error=", error));

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
const taskInfo = Tasks({
  description: "    Learning Node JS Course    ",
});
taskInfo
  .save()
  .then(() => console.log(taskInfo))
  .catch((err) => {
    console.log("Error=", err);
  });
