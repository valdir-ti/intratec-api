export interface IUser {
  id: string
  isActive: boolean
}

export {}

declare global {
  namespace Express {
    interface Request {
      user: IUser
    }
  }
}
