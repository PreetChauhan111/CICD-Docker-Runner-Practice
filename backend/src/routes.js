import express from "express";
import { pool } from "./db.js";
import { redisClient } from "./cache.js";

const router = express.Router();

router.get("/users", async (req, res) => {
  const cached = await redisClient.get("users");
  if (cached) {
    return res.json(JSON.parse(cached));
  }

  const result = await pool.query("SELECT id, name FROM users");
  await redisClient.set("users", JSON.stringify(result.rows), {
    EX: 60
  });

  res.json(result.rows);
});

export default router;
