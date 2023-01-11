import jwt from "jsonwebtoken"
import { NextFunction, Request, Response } from "express"

export const verifyToken = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    if (!req.headers.authorization) {
      return res
        .status(401)
        .json({ status: false, message: "You are not authenticated" })
    }

    const token = req.headers.authorization.split(" ")
    const access_token = token[1]

    if (!access_token) {
      return res
        .status(401)
        .json({ status: false, message: "You are not authenticated" })
    }

    const secret = process.env.JWT_SECRET || "secretkey"

    jwt.verify(access_token, secret, (err: unknown, user: unknown) => {
      if (err)
        return res
          .status(401)
          .json({ status: false, message: "Invalid credentials" })

      req.user = user
      next()
    })
  } catch (error) {
    return res.status(500).json({ error: error })
  }
}
