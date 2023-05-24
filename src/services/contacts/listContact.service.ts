import { AppDataSource } from "../../data-source";
import { Contact } from "../../entities/contact.entitie";
import { User } from "../../entities/user.entitie";
import { AppError } from "../../errors";
import { TContactArray } from "../../interfaces/contact.interfaces";
import { contactSchemaArray } from "../../schemas/contact.schema";


const listContactService = async (userId: string): Promise<TContactArray> => {

    const contactRepository = AppDataSource.getRepository(Contact)
    const userRepository = AppDataSource.getRepository(User)

    const user: User | null = await userRepository.findOneBy({
        id: userId
    })

    if (!user) {
        throw new AppError("User not exists", 404);
    }

    const contacts: Contact[] = await contactRepository.find({
        where: {
            user: user
        }
    })

    return contactSchemaArray.parse(contacts)

}

export { listContactService }