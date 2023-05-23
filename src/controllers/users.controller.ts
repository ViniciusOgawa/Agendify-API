import { Request, Response } from "express";
import { TUserRequest } from "../interfaces/users.interfaces";
import { createUserService } from "../services/users/createUser.service";

const createUserController = async (req: Request, res: Response) => {

    const { name, email, password, phoneNumber }: TUserRequest = req.body

    const newUser = await createUserService({ name, email, password, phoneNumber })

    return res.status(201).json(newUser)

}

export { createUserController }