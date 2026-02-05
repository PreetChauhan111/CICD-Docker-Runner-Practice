import express from "express";
import routes from "./routes.js";

const app = express();
app.use(express.json());

app.use("/", routes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () =>
  console.log(`Backend running on port ${PORT}`)
);
