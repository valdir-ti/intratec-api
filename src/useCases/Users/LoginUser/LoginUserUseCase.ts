import jwt from "jsonwebtoken"
import bcrypt from "bcryptjs"
import { IUsersRepository } from "../../../repositories/IUsersRepository"
import { LoginUserRequestDTO } from "./LoginUserDTO"

export class LoginUserUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  async execute(data: LoginUserRequestDTO) {
    const user = await this.usersRepository.findByEmail(data.email)

    if (!user) return false

    const { name, email, password, level, isActive, id } = user[0]

    const isCorrectPassword = bcrypt.compareSync(data.password, password)

    if (!isCorrectPassword) return false

    const secret = process.env.JWT_SECRET || "secretkey"

    const token = jwt.sign(
      { id: id, isActive: isActive, level: level },
      secret,
      {
        expiresIn: "1d",
      }
    )

    const userData = {
      id: id,
      name: name,
      email: email,
    }

    return { token, userData }
  }
}
