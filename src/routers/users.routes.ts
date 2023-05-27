import { Router } from "express"
import { createUserController, deleteUserController, listUserController, retriveUserController, updateUserController } from "../controllers/users.controller"
import { ensureDataIsValid } from "../middlewares/ensureDataIsValid.middleware"
import { userSchemaRequest, userSchemaUpdate } from "../schemas/users.schema"
import { ensureTokenIsValid } from "../middlewares/ensureTokenIsValid.middleware"
import { ensureUserExists } from "../middlewares/ensureUserExists.middleware"
import { ensureEmailExists } from "../middlewares/ensureEmailExists.middleware"
import { ensureUserPermission } from "../middlewares/ensureUserPermission.middleware"

const userRoutes: Router = Router()

userRoutes.post("", ensureEmailExists, ensureDataIsValid(userSchemaRequest), createUserController)
userRoutes.patch("/:id", ensureTokenIsValid, ensureUserPermission, ensureUserExists, ensureDataIsValid(userSchemaUpdate), updateUserController)
userRoutes.get("", listUserController)
userRoutes.get("/profile", ensureTokenIsValid, retriveUserController)
userRoutes.delete("/:id", ensureTokenIsValid, ensureUserPermission, ensureUserExists, deleteUserController)

export { userRoutes } 