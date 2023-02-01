const express = require("express");
const router = express.Router();

// @route GET api/randomstring
// @desc gets a random string
// @access Public
router.get("/", (req, res) => {
  try {
    // make request for random string
    // send string back to user
    res.json({ test: "The Test Route Works!" });
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

module.exports = router;
