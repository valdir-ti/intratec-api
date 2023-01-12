import { Request, Response } from "express"
import { UpdateUserUseCase } from "./UpdateUserUseCase"

export class UpdateUserController {
  constructor(private updateUserUseCase: UpdateUserUseCase) {}

  async handle(req: Request, res: Response): Promise<Response> {
    try {
      if (req.body.email) {
        return res
          .status(401)
          .json({ status: true, message: "You cannot update email" })
      }

      const { id } = req.params
      const data = req.body

      const updated = await this.updateUserUseCase.execute(id, data)

      if (!updated) {
        return res.status(400).json({ status: true, message: "user not found" })
      }

      return res.status(201).json({ status: true, message: "user updated" })
    } catch (error) {
      return res.status(500).json({ error: error })
    }
  }
}
