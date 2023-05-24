import { z } from "zod";

const createTokenSchema = z.object({
    email: z.string().email(),
    password: z.string()
})

export { createTokenSchema }