import { Request, Response, NextFunction } from "express"
import { verifyToken } from "./verifyToken"

export const verifyAdmin = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    verifyToken(req, res, () => {
      if (req.user.isActive) {
        if (req.user.level === "admin" || req.user.level === "manager") {
          next()
        } else {
          return res
            .status(401)
            .json({ status: false, message: "You are not admin" })
        }
      } else {
        return res
          .status(401)
          .json({ status: false, message: "You are not admin" })
      }
    })
  } catch (error) {
    return res.status(500).json({ status: false, message: error.message })
  }
}
