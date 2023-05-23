import { z } from "zod"
import { userSchema, userSchemaRequest, userSchemaResponse } from "../schemas/users.schema"

type TUserRequest = z.infer<typeof userSchemaRequest>
type TUser = z.infer<typeof userSchema>
type TUSerResponse = z.infer<typeof userSchemaResponse>

export { TUSerResponse, TUser, TUserRequest }