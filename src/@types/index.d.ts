export interface IUser {
  id: string
  isActive: boolean
  level: string
}

export {}

declare global {
  namespace Express {
    interface Request {
      user: IUser
    }
  }
}
