const express = require("express");
require("./db/mongoose");

const User = require("./models/user");
const Task = require("./models/task");

const app = express();
//const port = process.env.PORT() || 3000;
const port = 3000;

app.use(express.json()); //this automatically parse incoming JSON to objects

app.post("/users", async (req, res) => {
  const user = new User(req.body);
  try {
    await user.save();
    res.status(201).send(user);
  } catch (e) {
    res.status(401).send(e);
  }
});

app.get("/users", async (req, res) => {
  try {
    const users = await User.find({});
    res.send(users);
  } catch (error) {
    res.status(500).send();
  }
  // User.find({})
  //   .then((users) => {
  //     res.send(users);
  //   })
  //   .catch((e) => {
  //     res.status(500).send();
  //   });
});

app.get("/users/:id", async (req, res) => {
  const _id = req.params.id;

  try {
    const users = await User.findById(_id);
    if (!users) {
      return res.status(404).send();
    }
    res.send(users);
  } catch (error) {
    res.status(500).send();
  }
  // User.findById(_id)
  //   .then((users) => {
  //     if (!users) {
  //       return req.status(404).send();
  //     }
  //     res.send(users);
  //   })
  //   .catch((e) => {
  //     res.status(500).send();
  //   });
});

app.post("/tasks", async (req, res) => {
  const task = new Task(req.body);
  try {
    const tasks = await task.save();
    res.status(201).send(tasks);
  } catch (error) {
    res.status(400).send(error);
  }
  // task
  //   .save()
  //   .then(() => {
  //     res.status(201).send(task);
  //   })
  //   .catch((e) => {
  //     res.status(400).send(e);
  //   });
});

app.get("/tasks", async (req, res) => {
  try {
    const tasks = await Task.find({});
    res.send(tasks);
  } catch (error) {
    res.status(401).send(e);
  }
  // Task.find({})
  //   .then((tasks) => {
  //     res.send(tasks);
  //   })
  //   .catch((e) => {
  //     res.status(400).send(e);
  //   });
});

app.get("/tasks/:id", async (req, res) => {
  const _id = req.params.id;
  try {
    const tasks = await Task.findById(_id);
    if (!tasks) {
      return res.status(404).send();
    }
    return res.send(tasks);
  } catch (error) {
    res.status(500).send();
  }
  // Task.findById(_id)
  //   .then((task) => {
  //     if (!task) {
  //       return res.status(404).send();
  //     }
  //     res.send(task);
  //   })
  //   .catch((e) => {
  //     res.status(500).send();
  //   });
});

app.listen(port, () => {
  console.log("Server is up on port ", port);
});
