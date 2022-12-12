import { Router } from "express";
import { createUsercontroller } from "../useCases";

const userRouter = Router();

userRouter.post("/users", (req, res) => {
  return createUsercontroller.handle(req, res);
});

export { userRouter };
