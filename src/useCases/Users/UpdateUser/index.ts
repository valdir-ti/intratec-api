import { MongoUsersProvider } from "../../../repositories/implementations/users/mongo/MongoUsersProvider"
import { UpdateUserController } from "./UpdateUserController"
import { UpdateUserUseCase } from "./UpdateUserUseCase"

const mongoUsersProvider = new MongoUsersProvider()

const updateUserUseCase = new UpdateUserUseCase(mongoUsersProvider)

const updateUserController = new UpdateUserController(updateUserUseCase)

export { updateUserController, updateUserUseCase }
