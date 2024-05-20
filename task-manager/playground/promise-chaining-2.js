require("../src/db/mongoose");

const Task = require("../src/models/task");

Task.findByIdAndDelete("664b467e6c7d5d1855ae141e")
  .then((tasks) => {
    console.log(tasks);
    return Task.countDocuments({ isCompleted: false });
  })
  .then((result) => {
    console.log("total incompleted=", result);
  })
  .catch((error) => {
    console.log("error=", error);
  });
