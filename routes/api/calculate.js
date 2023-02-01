const express = require("express");
const router = express.Router();

const OPERATIONS = {
  addition: (num1, num2) => num1 + num2,
  subtraction: (num1, num2) => num1 - num2,
  multiplication: (num1, num2) => num1 * num2,
  division: (num1, num2) => num1 / num2,
  square: (...args) => Math.sqrt(args[0]),
};

// @route GET api/calculate
// @desc calculates inputs
// @access Public
router.get("/", (req, res) => {
  try {
    const operation = OPERATIONS[req.body.type];
    const value1 = Number(req.body.value_1);
    const value2 = Number(req.body.value_2);

    const newValue = operation(value1, value2);

    res.json({ value: newValue });
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

module.exports = router;
