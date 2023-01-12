import { Router } from "express"
import { deleteUserController } from "../useCases/Users/DeleteUser"
import { getUserController } from "../useCases/Users/GetUser"
import { listUserController } from "../useCases/Users/ListUsers"
import { verifyAdmin, verifyToken } from "../middlewares"
import { updateUserController } from "../useCases/Users/UpdateUser"

const usersRouter = Router()

usersRouter.get("/", verifyToken, (req, res) => {
  return listUserController.handle(req, res)
})

usersRouter.delete("/:id", verifyToken, verifyAdmin, (req, res) => {
  return deleteUserController.handle(req, res)
})

usersRouter.get("/:id", verifyToken, (req, res) => {
  return getUserController.handle(req, res)
})

usersRouter.patch("/:id", verifyToken, verifyAdmin, (req, res) => {
  return updateUserController.handle(req, res)
})

export { usersRouter }
