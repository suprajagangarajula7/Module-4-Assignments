import express from "express";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import rateLimiter from "./middleware/rateLimiter.middleware.js";
import validateTodo from "./middleware/validateTodo.middleware.js";

const router = express.Router();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const DB_PATH = path.join(__dirname, "../src/db.json");

// Helper functions
const readDB = () => JSON.parse(fs.readFileSync(DB_PATH, "utf-8"));
const writeDB = (data) =>
  fs.writeFileSync(DB_PATH, JSON.stringify(data, null, 2));

