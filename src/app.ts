import express, {Request, Response} from "express";
import { authRouter } from "./routes";

const app = express();

app.use(express.json());

app.get("/", (req: Request, res: Response) => {
    res.status(200).json({ message: "Intratec Api initial route" });
});

app.use("/auth", authRouter);

export { app };
