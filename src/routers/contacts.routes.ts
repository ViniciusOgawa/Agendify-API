import { Router } from "express";
import {
  deleteContactController,
  listContactController,
  updateContactController,
  createContactController,
} from "../controllers/contacts.controllers";
import { ensureTokenIsValid } from "../middlewares/ensureTokenIsValid.middleware";
import { ensureDataIsValid } from "../middlewares/ensureDataIsValid.middleware";
import {
  contactSchemaRequest,
  contactSchemaUpdate,
} from "../schemas/contact.schema";
import { ensureEmailExists } from "../middlewares/ensureEmailExists.middleware";
import { ensureIsOwnerMiddleware } from "../middlewares/ensureIsOwner.middleware";

const contactsRoutes: Router = Router();

contactsRoutes.use(ensureTokenIsValid);

contactsRoutes.post(
  "",
  ensureDataIsValid(contactSchemaRequest),
  createContactController
);
contactsRoutes.delete("/:id", ensureIsOwnerMiddleware, deleteContactController);
contactsRoutes.patch(
  "/:id",
  ensureIsOwnerMiddleware,
  ensureDataIsValid(contactSchemaUpdate),
  updateContactController
);
contactsRoutes.get("", listContactController);

export { contactsRoutes };
