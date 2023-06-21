import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

class TaskController {
  async index(req: Request, res: Response) {
    const tasks = await prisma.task.findMany();

    return res.json(tasks);
  }

  async create(req: Request, res: Response) {
    const { name, description } = req.body;

    const task = await prisma.task.create({
      data: {
        name,
        description,
      },
    });

    return res.json(task);
  }

  async destroy(req: Request, res: Response) {
    const { id } = req.params;

    const task = await prisma.task.delete({
      where: {
        id: +id,
      },
    });

    return res.json(task);
  }

  async find(req: Request, res: Response) {
    const { id } = req.params;

    const task = await prisma.task.findFirst({
      where: {
        id: +id,
      },
    });

    return res.json(task);
  }

  async update(req: Request, res: Response) {
    const { id } = req.params;
    const { name, description } = req.body;

    const task = await prisma.task.update({
      where: { id: +id },
      data: {
        name,
        description,
      },
    });

    return res.json(task);
  }
}

export default TaskController;
