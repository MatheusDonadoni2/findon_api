import { Router } from "express";
import { FindAllController } from "../../../../module/users/useCases/findAll/FindAllController";
import { FindAllExpensesByUserContoller } from "../../../../module/users/useCases/findAllExpensesByUser/FindAllExpensesByUserContoller";
import { CreateUserController } from "../../../../module/users/useCases/createUser/CreateUserController";
import { AuthenticateUsersController } from "../../../../module/users/useCases/authenticateUser/AuthenticateUserController";
import { ensureAuthenticateClient } from "../../middlewares/ensereAuthenticate";

const createUserController = new CreateUserController();
const authenticateUsersController = new AuthenticateUsersController();
const findAllController = new FindAllController();
const findAllExpensesByUserContoller = new FindAllExpensesByUserContoller();

const usersRoutes = Router();

usersRoutes.post("/", createUserController.handle);
usersRoutes.post("/authenticate", authenticateUsersController.handle);

usersRoutes.get("/listAll", ensureAuthenticateClient, findAllController.handle);
usersRoutes.get("/findAllExpensesByUser", ensureAuthenticateClient, findAllExpensesByUserContoller.handle);

export { usersRoutes }