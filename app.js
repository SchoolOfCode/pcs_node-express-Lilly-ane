import express from "express";
import todosRouter from "./routes/todos.js";

const app = express();
// use the env var port or 3000
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use("/todos", todosRouter);

app.listen(PORT, () => {
  console.log(`Express server running on port: ${PORT}`);
});
