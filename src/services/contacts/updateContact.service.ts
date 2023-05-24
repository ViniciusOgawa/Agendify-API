import { AppDataSource } from "../../data-source";
import { Contact } from "../../entities/contact.entitie";
import { AppError } from "../../errors";
import { TContactResponse, TContactUpdate } from "../../interfaces/contact.interfaces";
import { contactSchemaResponse } from "../../schemas/contact.schema";


const updateContactSerice = async (data: TContactUpdate, contactId: string): Promise<TContactResponse> => {

    const contactRepository = AppDataSource.getRepository(Contact)

    const oldContact: Contact | null = await contactRepository.findOneBy({
        id: contactId
    })

    if (!oldContact) {
        throw new AppError("Contact not found", 404)
    }

    const newContactData = contactRepository.create({
        ...oldContact,
        ...data
    })

    contactRepository.save(newContactData)

    return contactSchemaResponse.parse(newContactData)

}

export { updateContactSerice }