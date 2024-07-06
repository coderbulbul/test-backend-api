// Import Dependencies
const express = require("express");

const app = express();

// Routing
app.get("/", (req, res) => {
  res.send("Get request to homepag");
});

app.listen(8000, () => {
  console.log("App is running on port 8000");
});

module.exports = app;
