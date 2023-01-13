import MongoUsersUser from "./MongoUsersModel"
import { User } from "../../../../entities/User"
import { IUsersRepository } from "../../../IUsersRepository"
import bcrypt from "bcryptjs"

const excludedObjFields = {
  _id: 0,
  __v: 0,
  createdAt: 0,
  updatedAt: 0,
  password: 0,
}

export class MongoUsersProvider implements IUsersRepository {
  async findByCPF(cpf: string): Promise<unknown> {
    const user = await MongoUsersUser.find({ cpf })

    if (user.length === 0) {
      return null
    }

    return user
  }

  async findById(id: string): Promise<unknown> {
    const user = await MongoUsersUser.find({ id }, excludedObjFields)

    if (user.length === 0) return null

    return user
  }

  async findAll(): Promise<User[]> {
    const users = await MongoUsersUser.find({}, excludedObjFields)
    return users
  }

  async findByEmail(email: string): Promise<unknown> {
    const user = await MongoUsersUser.find({ email })

    if (user.length === 0) {
      return null
    }

    return user
  }

  async save(user: User): Promise<void> {
    const salt = bcrypt.genSaltSync(10)
    const hash = bcrypt.hashSync(user.password, salt)

    const newU = {
      ...user,
      id: user.id,
      level: user.level ?? "user",
      language: user.language ?? "pt",
      password: hash,
    }

    const newUser = new MongoUsersUser(newU)

    await newUser.save()
  }

  async update(id: string, data: User): Promise<boolean> {
    const foundUser = await MongoUsersUser.findOne({ id })

    if (!foundUser) {
      return false
    }

    if (data.password) {
      const salt = bcrypt.genSaltSync(10)
      const hash = bcrypt.hashSync(data.password, salt)
      const newU = { ...data, password: hash }
      await MongoUsersUser.findOneAndUpdate({ id: id }, newU, {
        returnOriginal: false,
      })
    } else {
      await MongoUsersUser.findOneAndUpdate({ id: id }, data, {
        returnOriginal: false,
      })
    }

    return true
  }

  async delete(id: string): Promise<boolean> {
    const user = await MongoUsersUser.findOne({ id })

    if (!user) return false

    const userDeleted = await MongoUsersUser.deleteOne({ id })
    return userDeleted.acknowledged
  }
}
