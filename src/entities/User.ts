import { randomUUID } from "crypto"

export class User {
  public readonly id: string

  public username: string
  public email: string
  public password: string
  public isAdmin: boolean

  constructor(props: Omit<User, "id">, id?: string) {
    Object.assign(this, props)

    if (!id) {
      this.id = randomUUID()
    }
  }
}
