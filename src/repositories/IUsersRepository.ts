import { User } from "../entities/User"

export interface IUsersRepository {
  findByEmail(email: string): Promise<User | unknown>
  findByUserName(username: string): Promise<User | unknown>
  findAll(): Promise<User | unknown>
  save(user: User): Promise<void>
}
