// require("dotenv").config();
const express = require("express");
const cors = require("cors");

const app = express();

// init middleware
app.use(express.json({ extended: false }));

// CORS
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Headers", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PATCH, DELETE");
  next();
});

app.get("/", (req, res) => {
  res.render("index"); // render frontpage here
});

// define routes
app.use("/api/calculate", require("./routes/api/calculate"));
app.use("/api/calculate", require("./routes/api/randomstring"));

const PORT = process.env.PORT || 9090;

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
