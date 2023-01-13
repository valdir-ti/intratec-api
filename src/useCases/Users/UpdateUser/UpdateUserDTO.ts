enum Level {
  "user",
  "manager",
  "admin",
}
enum Language {
  "pt",
  "en",
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
  language: Language
  isActive: boolean
  companies: []
  respId: string
}
