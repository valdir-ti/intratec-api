import jwt from "jsonwebtoken"
import bcrypt from "bcryptjs"
import { IUsersRepository } from "../../../repositories/IUsersRepository"
import { LoginUserRequestDTO } from "./LoginUserDTO"

export class LoginUserUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  async execute(data: LoginUserRequestDTO) {
    const user = await this.usersRepository.findByEmail(data.email)

    if (!user) return false

    const isCorrectPassword = bcrypt.compareSync(
      data.password,
      user[0].password
    )

    if (!isCorrectPassword) return false

    const secret = process.env.JWT_SECRET || "secretkey"

    const token = jwt.sign(
      { id: user[0].id, isAdmin: user[0].isAdmin },
      secret,
      {
        expiresIn: "1d",
      }
    )

    const userData = {
      id: user[0].id,
      username: user[0].username,
      email: user[0].email,
    }

    return { token, userData }
  }
}
