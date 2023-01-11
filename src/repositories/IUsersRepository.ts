import { User } from "../entities/User"

export interface IUsersRepository {
  findByEmail(email: string): Promise<User | unknown>

  findByUserName(username: string): Promise<User | unknown>

  findAll(): Promise<User | unknown>

  findById(id: string): Promise<User | unknown>

  save(user: User): Promise<void>

  update(id: string, data: User): Promise<User | unknown>

  delete(id: string): Promise<boolean>
}
