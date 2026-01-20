import express from "express";
import todosRouter from "./routes/todos.routes.js";
import loggerMiddleware from "./middleware/logger.middleware.js";

const app = express();

app.use(express.json());
app.use(loggerMiddleware);

app.use("/todos", todosRouter);

app.listen(3000, () => {
  console.log("Server is running on http://localhost:3000");
});
