import { z } from "zod";
import { createTokenSchema } from "../schemas/login.schema";

type TLoginRequest = z.infer<typeof createTokenSchema>

export { TLoginRequest }