import { z } from "zod"

const contactSchema = z.object({
    id: z.string(),
    name: z.string(),
    email: z.string().email(),
    phoneNumber: z.number()
})

const contactSchemaRequest = contactSchema.omit({
    id: true
})

const contactSchemaUpdate = contactSchema.omit({
    id: true
}).partial()

const contactSchemaResponse = contactSchema.extend({
    createdAt: z.string(),
    updatedAt: z.string(),
})

const contactSchemaArray = contactSchemaResponse.array()

export { contactSchema, contactSchemaArray, contactSchemaRequest, contactSchemaResponse, contactSchemaUpdate }