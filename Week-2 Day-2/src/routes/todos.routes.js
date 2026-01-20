import express from "express";
import fs from "fs";
import path from "path";

const router = express.Router();
const DB_PATH = path.join("src", "db.json");

// Helper functions
const readDB = () => JSON.parse(fs.readFileSync(DB_PATH, "utf-8"));
const writeDB = (data) => fs.writeFileSync(DB_PATH, JSON.stringify(data, null, 2));

// Create Todo
router.post("/add", (req, res) => {
  const { title, completed } = req.body;
  if (!title) return res.status(400).json({ message: "Title is required" });

  const db = readDB();
  const newTodo = { id: Date.now().toString(), title, completed: completed || false };
  db.todos.push(newTodo);
  writeDB(db);

  res.status(201).json({ message: "Todo added", todo: newTodo });
});

// Get All Todos
router.get("/", (req, res) => {
  const db = readDB();
  res.json(db.todos);
});

// Get Single Todo
router.get("/:todoId", (req, res) => {
  const db = readDB();
  const todo = db.todos.find(t => t.id === req.params.todoId);
  if (!todo) return res.status(404).json({ message: "Todo not found" });
  res.json(todo);
});

// Update Todo
router.put("/update/:todoId", (req, res) => {
  const db = readDB();
  const todoIndex = db.todos.findIndex(t => t.id === req.params.todoId);
  if (todoIndex === -1) return res.status(404).json({ message: "Todo not found" });

  db.todos[todoIndex] = { ...db.todos[todoIndex], ...req.body };
  writeDB(db);

  res.json({ message: "Todo updated", todo: db.todos[todoIndex] });
});

// Delete Todo
router.delete("/delete/:todoId", (req, res) => {
  const db = readDB();
  const todoIndex = db.todos.findIndex(t => t.id === req.params.todoId);
  if (todoIndex === -1) return res.status(404).json({ message: "Todo not found" });

  const deletedTodo = db.todos.splice(todoIndex, 1);
  writeDB(db);

  res.json({ message: "Todo deleted", todo: deletedTodo[0] });
});

export default router;
