import { NextFunction, Request, Response } from "express"
import { Repository } from "typeorm"
import { AppDataSource } from "../data-source"
import { User } from "../entities/user.entitie"
import { AppError } from "../errors"
import { Contact } from "../entities/contact.entitie"

const ensureEmailExists = async (
    req: Request,
    res: Response,
    next: NextFunction
): Promise<void> => {
    const userRepository: Repository<User> = AppDataSource.getRepository(User)
    const contactRepository = AppDataSource.getRepository(Contact)

    const findUser: User | null = await userRepository.findOne({
        where: {
            email: req.body.email
        },
        withDeleted: true
    })

    if (findUser?.email === req.body.email) {
        throw new AppError("Email already exists", 409)
    }

    const findContact: Contact | null = await contactRepository.findOne({
        where: {
            email: req.body.email
        }
    })

    if (findContact?.email === req.body.email) {
        throw new AppError("Email already exists", 409)
    }

    return next()
}

export { ensureEmailExists }