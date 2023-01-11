import { MongoUsersProvider } from "../../../repositories/implementations/users/mongo/MongoUsersProvider"
import { GetUserController } from "./GetUserController"
import { GetUserUseCase } from "./GetUserUseCase"

const mongoUsersProvider = new MongoUsersProvider()

const getUserUseCase = new GetUserUseCase(mongoUsersProvider)

const getUserController = new GetUserController(getUserUseCase)

export { getUserUseCase, getUserController }
