import { z } from "zod"

const userSchema = z.object({
    id: z.string(),
    name: z.string(),
    email: z.string().email(),
    password: z.string(),
    phoneNumber: z.number()
})

const userSchemaRequest = userSchema.omit({
    id: true
})

const userSchemaResponse = userSchema.extend({
    createdAt: z.string(),
}).omit({
    password: true
})

export { userSchema, userSchemaRequest, userSchemaResponse }