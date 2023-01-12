import { randomUUID } from "crypto"

export class User {
  public readonly id: string

  public name: string
  public lastName: string
  public photo: string
  public birthdate: string
  public email: string
  public cpf: string
  public password: string
  public level?: {
    type: string
    enum: ["user", "manager", "admin"]
    default: 0
  }
  public isActive: boolean
  public companies?: string[]
  public respId: string

  constructor(props: Omit<User, "id">, id?: string) {
    Object.assign(this, props)

    if (!id) {
      this.id = randomUUID()
    }
  }
}
