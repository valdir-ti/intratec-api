import { Router } from "express"
import { deleteUserController } from "../useCases/Users/DeleteUser"
import { getUserController } from "../useCases/Users/GetUser"
import { listUserController } from "../useCases/Users/ListUsers"

const usersRouter = Router()

usersRouter.get("/", (req, res) => {
  return listUserController.handle(req, res)
})

usersRouter.delete("/:id", (req, res) => {
  return deleteUserController.handle(req, res)
})

usersRouter.get("/:id", (req, res) => {
  return getUserController.handle(req, res)
})

export { usersRouter }
