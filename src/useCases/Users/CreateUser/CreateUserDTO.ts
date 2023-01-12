export interface CreateUserRequestDTO {
  name: string
  lastName: string
  photo: string
  birthdate: string
  email: string
  cpf: string
  password: string
  isActive: boolean
  respId: string
  id?: string
  level?: any
  companies?: []
}
