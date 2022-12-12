import dotenv from "dotenv";
import { app } from "./app";
import mongoose from "mongoose";

dotenv.config();

const port = process.env.PORT || 3333;

const connect = async () => {
  try {
    const mongo_url = `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@cluster0.fwkqxjm.mongodb.net/booking?retryWrites=true&w=majority`;
    mongoose.set("strictQuery", false);
    await mongoose.connect(mongo_url || "");
    console.log("Connected to mongoDB");
  } catch (error) {
    throw error;
  }
};

app.listen(port, () => {
  connect();
  console.log("app listening port: " + port);
});
