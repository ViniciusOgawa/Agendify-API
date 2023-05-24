import { Request, Response } from "express"
import { TUserArray, TUserRequest } from "../interfaces/users.interfaces"
import { createUserService } from "../services/users/createUser.service"
import { updateUserService } from "../services/users/updateUser.service"
import { listUserService } from "../services/users/listUser.service"
import { deleteUserService } from "../services/users/deleteUser.service"

const createUserController = async (req: Request, res: Response) => {

    const { name, email, password, phoneNumber }: TUserRequest = req.body

    const newUser = await createUserService({ name, email, password, phoneNumber })

    return res.status(201).json(newUser)

}

const updateUserController = async (req: Request, res: Response) => {

    const userData = req.body

    const userId = req.params.id

    const updatedUser = await updateUserService(userData, userId)

    return res.json(updatedUser)

}

const listUserController = async (req: Request, res: Response) => {

    const users: TUserArray = await listUserService()

    return res.json(users)

}

const deleteUserController = async (req: Request, res: Response) => {

    const idUser = req.params.id

    await deleteUserService(idUser)

    return res.status(204).send()

}

export { createUserController, updateUserController, listUserController, deleteUserController }