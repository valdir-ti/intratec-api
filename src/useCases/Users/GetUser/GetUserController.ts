import { Response, Request } from "express"
import { GetUserUseCase } from "./GetUserUseCase"

export class GetUserController {
  constructor(private getUserUseCase: GetUserUseCase) {}

  async handle(req: Request, res: Response): Promise<Response> {
    const { id } = req.params

    const user = await this.getUserUseCase.execute(id)

    if (!user)
      return res.status(200).json({ status: false, message: "User not found" })

    return res.status(200).json({ status: true, data: user })
  }
}
