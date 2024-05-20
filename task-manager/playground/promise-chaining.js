require("../src/db/mongoose");
const User = require("../src/models/user");

// User.findByIdAndUpdate("664b40d0d510d2143b524a82", { age: 1 })
//   .then((users) => {
//     console.log(users);
//     return User.countDocuments({ age: 1 });
//   })
//   .then((result) => {
//     console.log("Result=", result);
//   })
//   .catch((e) => {
//     console.log("error=", e);
//   });

const updateAgeAndCount = async (id, age) => {
  const user = await User.findByIdAndUpdate(id, { age });
  const count = await User.countDocuments({ age });
  return count;
};
updateAgeAndCount("664b11016c03c20aa4661d44", 2)
  .then((count) => {
    console.log("count=", count);
  })
  .catch((err) => {
    console.log("Error=", err);
  });
