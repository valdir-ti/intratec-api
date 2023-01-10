import { IUsersRepository } from "../../../repositories/IUsersRepository"

export class DeleteUserUseCase {
  constructor(private usersRepository: IUsersRepository) {}
  async execute(id: string): Promise<boolean> {
    const userDeleted = await this.usersRepository.delete(id)
    return userDeleted
  }
}
