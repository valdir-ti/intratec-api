import { MongoUsersProvider } from "../../../repositories/implementations/users/mongo/MongoUsersProvider";
import { ListUserController } from "./ListUsersController";
import { ListUsersUseCase } from "./ListUsersUseCase";

const mongoUsersProvider = new MongoUsersProvider()

const listUserUseCase = new ListUsersUseCase(mongoUsersProvider)

const listUserController = new ListUserController(listUserUseCase)

export { listUserUseCase, listUserController }
