// Import Dependencies
const express = require("express");

const app = express();

// Routing
app.get("/", (req, res) => {
  res.json({ message: "Hello World" });
});

app.listen(process.env.PORT, () => {
  console.log("App is running on port 8000");
});

module.exports = app;
