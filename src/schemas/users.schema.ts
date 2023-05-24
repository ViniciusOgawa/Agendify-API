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
    deletedAt: z.string().nullable(),
    updatedAt: z.string(),
}).omit({
    password: true
})

const userSchemaUpdate = userSchema.partial().omit({
    id: true
});

const userSchemaArray = userSchemaResponse.array()

export { userSchema, userSchemaRequest, userSchemaResponse, userSchemaUpdate, userSchemaArray }