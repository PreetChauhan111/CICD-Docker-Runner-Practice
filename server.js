const express = require("express");
const app = express();

app.get("/", (req, res) => {
  console.log("Request received");
  res.send("Backend API is running");
});

app.get("/health", (req, res) => {
  res.status(200).json({ status: "OK" });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
