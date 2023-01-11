import { Request, Response } from "express"
import { DeleteUserUseCase } from "./DeleteUserUseCase"

export class DeleteUserController {
  constructor(private deleteUserUseCase: DeleteUserUseCase) {}
  async handle(req: Request, res: Response): Promise<Response> {
    const { id } = req.params
    const resp = await this.deleteUserUseCase.execute(id)

    if (resp) {
      return res
        .status(200)
        .json({ userId: id, status: resp, message: "user deleted" })
    }

    return res
      .status(400)
      .json({ userId: id, status: resp, message: "user not found" })
  }
}
