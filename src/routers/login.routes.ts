import { Router } from "express"
import { createTokenController } from "../controllers/login.controllers"
import { ensureDataIsValid } from "../middlewares/ensureDataIsValid.middleware"
import { createTokenSchema } from "../schemas/login.schema"

const loginRoutes: Router = Router()

loginRoutes.post("", ensureDataIsValid(createTokenSchema), createTokenController)

export { loginRoutes }