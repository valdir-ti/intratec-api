import { User } from "../../../entities/User"
import { IMailProvider } from "../../../providers/IMailProvider"
import { IUsersRepository } from "../../../repositories/IUsersRepository"
import { CreateUserRequestDTO } from "./CreateUserDTO"

export class CreateUserUseCase {
  constructor(
    private usersRepository: IUsersRepository,
    private mailProvider: IMailProvider
  ) {}

  async execute(data: CreateUserRequestDTO) {
    const cpfAlreadyExists = await this.usersRepository.findByCPF(data.cpf)

    if (cpfAlreadyExists) {
      throw new Error("CPF already in use")
    }

    const emailAlreadyExists = await this.usersRepository.findByEmail(
      data.email
    )

    if (emailAlreadyExists) {
      throw new Error("Email already in use")
    }

    const user = new User(data)

    await this.usersRepository.save(user)

    await this.mailProvider.sendMail({
      to: {
        name: data.name,
        email: data.email,
      },
      from: {
        name: "Equipe Intratec Tecnologia",
        email: "intratec@gmail.com",
      },
      subject: "Seja bem vindo a plataforma",
      body: `<p>Olá <b>${data.name}</b> você já pode acessar a nossa plataforma</p>`,
    })
  }
}
