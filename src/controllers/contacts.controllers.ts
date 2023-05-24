import { Request, Response } from "express";
import { createContactService } from "../services/contacts/createContact.service";
import { TContactArray } from "../interfaces/contact.interfaces";
import { listContactService } from "../services/contacts/listContact.service";
import { updateContactSerice } from "../services/contacts/updateContact.service";
import { deleteContactService } from "../services/contacts/deleteContact.service";


const createContactController = async (req: Request, res: Response) => {

    const userId = req.user.id
    const { email, phoneNumber, name } = req.body

    const newContact = await createContactService({ email, phoneNumber, name }, userId)

    return res.status(201).json(newContact)

}

const listContactController = async (req: Request, res: Response) => {

    const userId = req.user.id

    const contacts: TContactArray = await listContactService(userId);

    return res.json(contacts)

}

const updateContactController = async (req: Request, res: Response) => {

    const contactData = req.body;

    const contactId = req.params.id;

    const updatedContact = await updateContactSerice(contactData, contactId);

    return res.json(updatedContact);

}

const deleteContactController = async (req: Request, res: Response) => {

    const idContact = req.params.id;

    await deleteContactService(idContact);

    return res.status(204).send();

}

export { createContactController, listContactController, updateContactController, deleteContactController }