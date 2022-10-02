import { Router } from "express";

import { ensureAuthenticateClient } from "../../middlewares/ensereAuthenticate";

import { FindAllController } from "../../../../module/users/useCases/findAll/FindAllController";
import { FindAllExpensesByUserContoller } from "../../../../module/users/useCases/findAllExpensesByUser/FindAllExpensesByUserContoller";
import { FindUserByIDController } from "../../../../module/users/useCases/findUserByID/findUserByIDController";
import { CreateUserController } from "../../../../module/users/useCases/createUser/CreateUserController";
import { AuthenticateUsersController } from "../../../../module/users/useCases/authenticateUser/AuthenticateUserController";


const createUserController = new CreateUserController();
const authenticateUsersController = new AuthenticateUsersController();
const findUserByIDController = new FindUserByIDController();
const findAllController = new FindAllController();
const findAllExpensesByUserContoller = new FindAllExpensesByUserContoller();

const usersRoutes = Router();

usersRoutes.post("/", createUserController.handle);
usersRoutes.post("/authenticate", authenticateUsersController.handle);

usersRoutes.get("/find/:id", ensureAuthenticateClient, findUserByIDController.handle);
usersRoutes.get("/findAll", ensureAuthenticateClient, findAllController.handle);
usersRoutes.get("/findAllExpenses/:id", ensureAuthenticateClient, findAllExpensesByUserContoller.handle);

export { usersRoutes }