import { Router } from 'express';

import { usersRoutes } from './users.routes';
import { expensesRoutes } from './expenses.routes';

const routes = Router();

routes.use("/users", usersRoutes);
routes.use("/expenses", expensesRoutes);

export { routes };
