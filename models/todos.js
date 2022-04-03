import todos from "../libs/todos.js";

// Create
export function insertToDo(req, res) {
  // add the todo to the array, use the array length as id (it increases every time)
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
  // find the todo with a specific id
  const found = todos.find((todo) => todo.id === Number(req.params.id));
  res.json({
    success: true,
    payload: found ?? "Not found", // ?? means if found is undefined, return "Not found"
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
