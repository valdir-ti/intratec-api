import dotenv from "dotenv";
import express from "express";
import { userRouter } from "./routes/users";

dotenv.config();

const app = express();

app.use(express.json());

app.use(userRouter);

export { app };
