const express = require("express");

const app = express();
const PORT = 3000;

app.get("/", (req, res) => {
  res.send("Hello from Node.js CI/CD with Docker!");
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});