import todos from "../libs/todos.js";

// Create
export function insertToDo(req, res) {
  todos.push({ id: todos.length, task: req.body.task });
  res.json({
    success: true,
    payload: todos,
  });
}

// Read
export function readAll(req, res) {
  res.json({
    success: true,
    payload: todos,
  });
}

export function readById(req, res) {
  const found = todos.find((todo) => todo.id === Number(req.params.id));
  res.json({
    success: true,
    payload: found ?? "Not found",
  });
}

// Update
export function updateById(req, res) {
  todos.forEach((todo) => {
    if (todo.id === Number(req.params.id)) {
      todo.task = req.body.task;
    }
  });
  res.json({
    success: true,
    payload: todos,
  });
}

// Delete
export function deleteById(req, res) {
  todos.forEach((todo, index) => {
    if (todo.id === Number(req.params.id)) {
      todos.splice(index, 1);
    }
  });
  res.json({
    success: true,
    payload: todos,
  });
}
