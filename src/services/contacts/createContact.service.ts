import { AppDataSource } from "../../data-source";
import { Contact } from "../../entities/contact.entitie";
import { User } from "../../entities/user.entitie";
import { AppError } from "../../errors";
import { TContactRequest, TContactResponse } from "../../interfaces/contact.interfaces";
import { contactSchemaResponse } from "../../schemas/contact.schema";


const createContactService = async ({ email, phoneNumber, name }: TContactRequest, userId: string): Promise<TContactResponse> => {

    const contactRepository = AppDataSource.getRepository(Contact)
    const userRepository = AppDataSource.getRepository(User)

    const user: User | null = await userRepository.findOneBy({
        id: userId
    })

    if (!user) {
        throw new AppError("User not exists", 404);
    }

    const contact: Contact = contactRepository.create({
        email,
        phoneNumber,
        name,
        user
    })

    await contactRepository.save(contact)

    return contactSchemaResponse.parse(contact)

}

export { createContactService }