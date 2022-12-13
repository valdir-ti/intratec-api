import express from "express";
import { authRouter } from "./routes";

const app = express();

app.use(express.json());

app.use(authRouter);

export { app };
