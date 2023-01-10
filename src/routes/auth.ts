import { Router } from "express"
import { createUsercontroller } from "../useCases/Users/CreateUser"

const authRouter = Router()

authRouter.post("/register", (req, res) => {
  return createUsercontroller.handle(req, res)
})

export { authRouter }
