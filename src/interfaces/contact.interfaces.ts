import { z } from "zod"
import { DeepPartial } from "typeorm"
import { contactSchema, contactSchemaArray, contactSchemaRequest, contactSchemaResponse } from "../schemas/contact.schema"

type TContact = z.infer<typeof contactSchema>
type TContactRequest = z.infer<typeof contactSchemaRequest>
type TContactResponse = z.infer<typeof contactSchemaResponse>
type TContactUpdate = DeepPartial<TContactRequest>
type TContactArray = z.infer<typeof contactSchemaArray>

export { TContact, TContactArray, TContactRequest, TContactResponse, TContactUpdate }