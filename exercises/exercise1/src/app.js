// server.js

const express = require("express");
const arithmetic = require("./utils/arithmetic");

const app = express();

// Define API routes
app.get("/api/calculate/:operation", (req, res) => {
  const operation = req.params.operation;
  const { a, b } = req.query;
  console.log("operation=", operation, "res.query=", req.query);

  let result;

  switch (operation) {
    case "addition":
      result = arithmetic.addition(+a, +b);
      break;
    case "substraction":
      result = arithmetic.substraction(+a, +b);
      break;
    case "multiplication":
      result = arithmetic.multiply(+a, +b);
      break;
    case "division":
      result = arithmetic.divide(+a, +b);
      break;
    case "percentage":
      result = arithmetic.percentage(+a, +b);
      break;
    default:
      return res.status(400).json({ error: "Invalid operation" });
  }

  res.json({ result });
});

// Start server

app.listen(3001, () => {
  console.log("Server is Up on port 3001");
});

module.exports = app; // Export for testing purposes
