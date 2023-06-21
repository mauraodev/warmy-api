import express from "express";

// controller
import TaskController from "../controllers/taskController";

const router = express.Router();
const task = new TaskController();

router.get("/", task.index);

// router.get("/:id", task.find);

router.post("/", task.create);

// router.put("/:id", task.update);

// router.delete("/:id", task.destroy);

export default router;
