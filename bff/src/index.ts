import express, { Request, Response, Router } from "express";
import itemsRouter from "./routes/items.router";

const app = express();
const PORT = 8080;

app.use(express.json());

app.get("/", (req: Request, res: Response) => {
  res.send("Hello, TypeScript with Express!");
});

app.use("/api/items", itemsRouter);

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
