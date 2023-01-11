export interface IUser {
  id: string
  isAdmin: boolean
}

export {}

declare global {
  namespace Express {
    interface Request {
      user: IUser
    }
  }
}
