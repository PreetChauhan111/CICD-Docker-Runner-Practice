const express = require("express");
const app = express();

app.get("/", (req, res) => {
  console.log("Backend root hit");
  res.send("Backend running");
});

app.get("/health", (req, res) => {
  res.status(200).json({ status: "OK" });
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Backend listening on port ${PORT}`);
});
