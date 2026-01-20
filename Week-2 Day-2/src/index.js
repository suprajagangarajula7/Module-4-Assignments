import express from "express";
import usersRouter from "./routes/users.routes.js";
import todosRouter from "./routes/todos.routes.js";

const app = express();
const PORT = 3000;

// JSON Middleware
app.use(express.json());

// Routes
app.use("/users", usersRouter);
app.use("/todos", todosRouter);

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

