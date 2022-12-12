import { MailtrapMailProvider } from "../providers/implementations/MailtrapMailProvider";
import { MongoUsersRepository } from "../repositories/implementations/MongoUsersRepository";
import { CreateUserController } from "./CreateUserController";
import { CreateUserUseCase } from "./CreateUserUseCase";

const mailtrapProvider = new MailtrapMailProvider();
const mongoUsersRepository = new MongoUsersRepository();

const createUserUseCase = new CreateUserUseCase(
  mongoUsersRepository,
  mailtrapProvider
);

const createUsercontroller = new CreateUserController(createUserUseCase);

export { createUserUseCase, createUsercontroller };
