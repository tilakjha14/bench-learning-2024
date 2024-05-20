require("../src/db/mongoose");
const User = require("../src/models/user");

User.findByIdAndUpdate("664b40d0d510d2143b524a82", { age: 1 })
  .then((users) => {
    console.log(users);
    return User.countDocuments({ age: 1 });
  })
  .then((result) => {
    console.log("Result=", result);
  })
  .catch((e) => {
    console.log("error=", e);
  });
