import express from "express";
import todosRouter from "./routes/todos.js";

const app = express();
// use the env var port or 3000
const PORT = process.env.PORT || 3000;

// Use json middleware in order to be able to read jsons
app.use(express.json());

// for the todos route use the todosRouter
app.use("/todos", todosRouter);

app.listen(PORT, () => {
  console.log(`Express server running on port: ${PORT}`);
});
