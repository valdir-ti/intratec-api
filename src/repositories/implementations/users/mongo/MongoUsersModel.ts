import mongoose from "mongoose"
import { MongoResult } from "./IMongoResult"

const { Schema, model } = mongoose

interface IUser extends MongoResult {
  name: string
  lastName: string
  photo: string
  birthdate: string
  email: string
  cpf: string
  password: string
  level: {
    type: string
    enum: ["user", "manager", "admin"]
    default: 0
  }
  isActive: boolean
  companies: []
  respId: string
  id: string
}

const userSchema = new Schema<IUser>(
  {
    name: {
      type: String,
      require: true,
    },
    lastName: {
      type: String,
      default: "",
    },
    photo: {
      type: String,
      default: "",
    },
    birthdate: {
      type: String,
    },
    email: {
      type: String,
      require: true,
      unique: true,
    },
    cpf: {
      type: String,
      require: true,
      unique: true,
    },
    password: {
      type: String,
      require: true,
    },
    level: {
      type: String,
    },
    isActive: {
      type: Boolean,
      default: true,
    },
    companies: {
      type: [],
    },
    respId: {
      type: String,
    },
    id: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
)

export default model<IUser>("User", userSchema)
