import { Router } from "express"
import { listUserController } from "../useCases/Users/ListUsers"

const usersRouter = Router()

usersRouter.get("/", (req, res) => {
  return listUserController.handle(req, res)
})

export { usersRouter }
