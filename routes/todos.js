import express from "express";
import { readAll, readById, insertToDo, updateById } from "../models/todos.js";

const router = express.Router();

router.get("/", readAll);
router.get("/:id", readById);
router.post("/", insertToDo);
router.put("/:id", updateById);

export default router;
