import MongoUsersUser from "./MongoUsersModel"
import { User } from "../../../../entities/User"
import { IUsersRepository } from "../../../IUsersRepository"
import bcrypt from "bcryptjs"

export class MongoUsersProvider implements IUsersRepository {

  async findAll(): Promise<unknown> {
    const users = await MongoUsersUser.find()
    return users
  }

  async findByEmail(email: string): Promise<unknown> {
    const user = await MongoUsersUser.find({ email })

    if (user.length === 0) {
      return null
    }

    return user
  }

  async findByUserName(username: string): Promise<unknown> {
    const user = await MongoUsersUser.find({ username })

    if (user.length === 0) {
      return null
    }

    return user
  }

  async save(user: User): Promise<void> {
    const salt = bcrypt.genSaltSync(10)
    const hash = bcrypt.hashSync(user.password, salt)

    const newU = { ...user, id: user.id, password: hash }

    const newUser = new MongoUsersUser(newU)

    await newUser.save()
  }
}
