require("../src/db/mongoose");

const Task = require("../src/models/task");

// Task.findByIdAndDelete("664b467e6c7d5d1855ae141e")
//   .then((tasks) => {
//     console.log(tasks);
//     return Task.countDocuments({ isCompleted: false });
//   })
//   .then((result) => {
//     console.log("total incompleted=", result);
//   })
//   .catch((error) => {
//     console.log("error=", error);
//   });

const deleteTaskAndCount = async (id) => {
  const task = await Task.findByIdAndDelete(id);
  const count = await Task.countDocuments({ isCompleted: false });
  return count;
};
deleteTaskAndCount("664b083630b4e407dc2decd9")
  .then((count) => {
    console.log("Count=", count);
  })
  .catch((error) => {
    console.log("Error=", error);
  });
