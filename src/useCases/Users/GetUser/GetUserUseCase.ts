import { User } from "../../../entities/User"
import { IUsersRepository } from "../../../repositories/IUsersRepository"

export class GetUserUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  async execute(id: string): Promise<User | unknown> {
    const user = await this.usersRepository.findById(id)
    return user
  }
}
