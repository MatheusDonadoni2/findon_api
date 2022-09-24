import { Router } from 'express';

import { FindExpenseByIDController } from '../../../../module/expenses/useCases/findExpenseByID/FindExpenseByIDController'
import { CreateExpensesController } from "../../../../module/expenses/useCases/createExpenses/CreateExpensesController";
import { CreateItemExpenseController } from "../../../../module/expenses/useCases/createItemExpense/useCase/createItemExpenseController";
import { ensureAuthenticateCliente } from '../../middlewares/ensereAuthenticate';


const createExpensesController = new CreateExpensesController();
const createItemExpenseController = new CreateItemExpenseController();

const findExpenseByIDController = new FindExpenseByIDController();


const expensesRoutes = Router();

expensesRoutes.post("/", ensureAuthenticateCliente, createExpensesController.handle);
expensesRoutes.post("/createItensExpense/:id", ensureAuthenticateCliente, createItemExpenseController.handle);
expensesRoutes.get("/findExpenseByID", ensureAuthenticateCliente, findExpenseByIDController.handle);


export { expensesRoutes }

