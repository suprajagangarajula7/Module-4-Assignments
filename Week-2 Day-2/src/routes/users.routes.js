import express from "express";
import fs from "fs";
import path from "path";

const router = express.Router();
const DB_PATH = path.join("src", "db.json");

// Helper functions
const readDB = () => JSON.parse(fs.readFileSync(DB_PATH, "utf-8"));
const writeDB = (data) => fs.writeFileSync(DB_PATH, JSON.stringify(data, null, 2));

// Create User
router.post("/add", (req, res) => {
  const { name, email } = req.body;
  if (!name || !email) return res.status(400).json({ message: "Name and email are required" });

  const db = readDB();
  const newUser = { id: Date.now().toString(), name, email };
  db.users.push(newUser);
  writeDB(db);

  res.status(201).json({ message: "User added", user: newUser });
});

// Get All Users
router.get("/", (req, res) => {
  const db = readDB();
  res.json(db.users);
});

// Get Single User
router.get("/:userId", (req, res) => {
  const db = readDB();
  const user = db.users.find(u => u.id === req.params.userId);
  if (!user) return res.status(404).json({ message: "User not found" });
  res.json(user);
});

// Update User
router.put("/update/:userId", (req, res) => {
  const db = readDB();
  const userIndex = db.users.findIndex(u => u.id === req.params.userId);
  if (userIndex === -1) return res.status(404).json({ message: "User not found" });

  db.users[userIndex] = { ...db.users[userIndex], ...req.body };
  writeDB(db);

  res.json({ message: "User updated", user: db.users[userIndex] });
});

// Delete User
router.delete("/delete/:userId", (req, res) => {
  const db = readDB();
  const userIndex = db.users.findIndex(u => u.id === req.params.userId);
  if (userIndex === -1) return res.status(404).json({ message: "User not found" });

  const deletedUser = db.users.splice(userIndex, 1);
  writeDB(db);

  res.json({ message: "User deleted", user: deletedUser[0] });
});

export default router;
