enum Level {
  "user",
  "manager",
  "admin",
}

export interface UpdateUserRequestDTO {
  name: string
  lastName: string
  photo: string
  birthdate: string
  email: string
  cpf: string
  password: string
  level: Level
  isActive: boolean
  companies: []
  respId: string
}
