import { z } from "zod"
import { DeepPartial } from "typeorm";
import { userSchema, userSchemaRequest, userSchemaResponse, userSchemaArray } from "../schemas/users.schema"

type TUserRequest = z.infer<typeof userSchemaRequest>
type TUser = z.infer<typeof userSchema>
type TUSerResponse = z.infer<typeof userSchemaResponse>
type TUserUpdate = DeepPartial<TUserRequest>
type TUserArray = z.infer<typeof userSchemaArray>

export { TUSerResponse, TUser, TUserRequest, TUserUpdate, TUserArray }