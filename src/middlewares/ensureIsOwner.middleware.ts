import { Request, Response, NextFunction } from "express"
import { AppDataSource } from "../data-source"
import { Contact } from "../entities/contact.entitie"
import { AppError } from "../errors"

const ensureIsOwnerMiddleware = async (req: Request, res: Response, next: NextFunction) => {
    const contactRepositoy = AppDataSource.getRepository(Contact)

    const contactId: string = req.params.id
    const userId: string = req.user.id

    const contact = await contactRepositoy.findOne({
        where: {
            id: contactId
        },
        relations: {
            user: true
        }
    })

    if (!contact) {
        throw new AppError("Contact not found", 404)
    }

    if (contact.user.id !== userId) {
        throw new AppError("Insufficient permission", 403)
    }

    return next()
}

export { ensureIsOwnerMiddleware }