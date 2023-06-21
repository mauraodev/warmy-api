import bodyParser from "body-parser";
import dotenv from "dotenv";
import express, { Request, Response } from "express";

// routes
import taskRouter from './routes/task';

dotenv.config({});

const app = express();
const port = process.env.PORT;

app.use(bodyParser.json());

app.get("/", (req: Request, res: Response) => {
  res.send("Warmy - API REST");
});

app.use('/tasks', taskRouter);

app.listen(port, () => {
  console.log(`⚡️ [server]: Server is running at http://localhost:${port}`);
});
