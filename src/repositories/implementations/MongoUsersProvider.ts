import MongoModelUser from "./MongoUsersModel";
import { User } from "../../entities/User";
import { IUsersRepository } from "../IUsersRepository";

export class MongoUsersProvider implements IUsersRepository {
  private users: User[] = [];

  async findByEmail(email: string): Promise<any> {
    const user = await MongoModelUser.find({ email: email });

    if (user.length === 0) {
      return null;
    }

    return user;
  }

  async save(user: User): Promise<void> {
    const newUser: any = new MongoModelUser(user);

    const newU = { ...newUser._doc, id: user.id };

    await MongoModelUser.save(newU);

    // const newUser = await MongoModelUser

    // console.log("new user => ", newU);

    // this.users.push(user);
  }
}
