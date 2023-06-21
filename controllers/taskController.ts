import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

class TaskController {
  async index(req: Request, res: Response) {
    const tasks = await prisma.task.findMany();

    return res.json(tasks);
  }

  async create(req: Request, res: Response) {
    const { name } = req.body;

    const task = await prisma.task.create({
      data: {
        name,
      },
    });

    return res.json(task);
  }
}

export default TaskController;
