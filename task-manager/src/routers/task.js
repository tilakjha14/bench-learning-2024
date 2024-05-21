const express = require("express");
const Task = require("../models/task");

const router = express.Router();

router.post("/tasks", async (req, res) => {
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

router.get("/tasks", async (req, res) => {
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

router.get("/tasks/:id", async (req, res) => {
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
router.patch("/tasks/:id", async (req, res) => {
  const updates = Object.keys(req.body);
  const allowedUpdates = ["description", "isCompleted"];
  const isValidOperation = updates.every((update) =>
    allowedUpdates.includes(update)
  );
  if (!isValidOperation) {
    return res.status(401).send({ error: "not valid update" });
  }

  try {
    const task = await Task.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!task) {
      res.status(404).send(task);
    }
    res.send(task);
  } catch (error) {
    res.status(400).send(error);
  }
});

router.delete("/tasks/:id", async (req, res) => {
  try {
    const task = await Task.findByIdAndDelete(req.params.id);
    if (!task) {
      return res.status(404).send({ error: "invalid task" });
    }
    return res.send(task);
  } catch (e) {
    res.status(500).send(e);
  }
});
module.exports = router;
