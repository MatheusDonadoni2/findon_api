import { Router } from 'express';

import { FindExpenseByIDController } from '../../../../module/expenses/useCases/findExpenseByID/FindExpenseByIDController'
import { CreateExpensesController } from "../../../../module/expenses/useCases/createExpenses/CreateExpensesController";
import { CreateItemExpenseController } from "../../../../module/expenses/useCases/createItemExpense/useCase/createItemExpenseController";
import { ensureAuthenticateClient } from '../../middlewares/ensereAuthenticate';


const createExpensesController = new CreateExpensesController();
const createItemExpenseController = new CreateItemExpenseController();

const findExpenseByIDController = new FindExpenseByIDController();


const expensesRoutes = Router();

expensesRoutes.post("/", ensureAuthenticateClient, createExpensesController.handle);
expensesRoutes.post("/createItensExpense/:id", ensureAuthenticateClient, createItemExpenseController.handle);
expensesRoutes.get("/find/:id", ensureAuthenticateClient, findExpenseByIDController.handle);


export { expensesRoutes }

