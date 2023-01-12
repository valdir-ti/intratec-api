import { Request, Response } from "express"
import { CreateUserUseCase } from "./CreateUserUseCase"

export class CreateUserController {
  constructor(private createUserUseCase: CreateUserUseCase) {}

  async handle(req: Request, res: Response): Promise<Response> {
    const {
      name,
      lastName,
      photo,
      birthdate,
      email,
      cpf,
      password,
      isActive,
      respId,
      level,
    } = req.body

    const requiredFields = ["name", "cpf", "email", "password", "isActive"]

    for (const field of requiredFields) {
      if (!req.body?.[field]) {
        return res.status(400).json({
          status: false,
          message: `Field ${field} is required`,
        })
      }
    }

    try {
      await this.createUserUseCase.execute({
        name,
        lastName,
        photo,
        birthdate,
        email,
        cpf,
        password,
        isActive,
        respId,
        level,
      })
      return res.status(201).send({
        message: "User created successfully",
        name,
      })
    } catch (err) {
      return res.status(500).json({
        message: err.message || "Unexpected error",
      })
    }
  }
}
