import { Request, Response } from "express"
import { LoginUserUseCase } from "./LoginUserUseCase"

export class LoginUserController {
  constructor(private loginUserUseCase: LoginUserUseCase) {}

  async handle(req: Request, res: Response): Promise<Response> {
    const { email, password } = req.body

    if (!email || !password) {
      return res
        .status(400)
        .json({ status: false, message: "Email and password are required" })
    }

    const login = await this.loginUserUseCase.execute({ email, password })

    if (!login) {
      return res
        .status(400)
        .json({ status: false, message: "Email or password are incorrect" })
    }

    return res.status(200).json({ status: true, data: login })
  }
}
