import { Router } from "express"
import { createUserController, deleteUserController, listUserController, updateUserController } from "../controllers/users.controller"
import { ensureDataIsValid } from "../middlewares/ensureDataIsValid.middleware"
import { userSchemaRequest, userSchemaUpdate } from "../schemas/users.schema"
import { ensureTokenIsValid } from "../middlewares/ensureTokenIsValid.middleware"
import { ensureUserExists } from "../middlewares/ensureUserExists.middleware"
import { ensureEmailExists } from "../middlewares/ensureEmailExists.middleware"

const userRoutes: Router = Router()

userRoutes.post("", ensureEmailExists, ensureDataIsValid(userSchemaRequest), createUserController)
userRoutes.patch("/:id", ensureTokenIsValid, ensureUserExists, ensureDataIsValid(userSchemaUpdate), updateUserController)
userRoutes.get("", listUserController)
userRoutes.delete("/:id", ensureTokenIsValid, ensureUserExists, deleteUserController)

export { userRoutes } 