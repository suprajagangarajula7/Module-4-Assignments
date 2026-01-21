import { readTodos, writeTodos } from "../models/todo.model.js";


export const getTodos = (req, res) => {
  try {
    const todos = readTodos();
    res.status(200).json(todos);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch todos" });
  }
};


export const createTodo = (req, res) => {
  try {
    const { title, completed } = req.body;

    if (!title) {
      return res.status(400).json({ message: "Title is required" });
    }

    const todos = readTodos();
    const newTodo = {
      id: Date.now(),
      title,
      completed: completed ?? false,
    };

    todos.push(newTodo);
    writeTodos(todos);

    res.status(201).json(newTodo);
  } catch (error) {
    res.status(500).json({ message: "Failed to create todo" });
  }
};


export const updateTodo = (req, res) => {
  try {
    const id = Number(req.params.id);
    const todos = readTodos();

    const index = todos.findIndex((t) => t.id === id);
    if (index === -1) {
      return res.status(404).json({ message: "Todo not found" });
    }

    todos[index] = { ...todos[index], ...req.body };
    writeTodos(todos);

    res.status(200).json(todos[index]);
  } catch (error) {
    res.status(500).json({ message: "Failed to update todo" });
  }
};

export const deleteTodo = (req, res) => {
  try {
    const id = Number(req.params.id);
    const todos = readTodos();

    const filteredTodos = todos.filter((t) => t.id !== id);
    if (filteredTodos.length === todos.length) {
      return res.status(404).json({ message: "Todo not found" });
    }

    writeTodos(filteredTodos);
    res.status(200).json({ message: "Todo deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Failed to delete todo" });
  }
};
