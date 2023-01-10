import { Request, Response } from "express";
import { ListUsersUseCase } from "./ListUsersUseCase";

export class ListUserController {
    constructor(
        private listUserUseCase: ListUsersUseCase
    ){}

    async handle(req: Request, res: Response): Promise<Response>{
        const users = await this.listUserUseCase.execute();
        return res.status(200).send(users);
    }
}