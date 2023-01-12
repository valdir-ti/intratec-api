import { User } from "../../../entities/User"
import { IUsersRepository } from "../../../repositories/IUsersRepository"

export class UpdateUserUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  async execute(id: string, data: User): Promise<User | unknown> {
    const updated = await this.usersRepository.update(id, data)

    return updated
  }
}
