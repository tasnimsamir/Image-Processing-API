import express from 'express';
import processImge from './api/processImg';

const routes = express.Router();

routes.get('/', (req: express.Request, res: express.Response): void => {
  res.send('Main API Route..');
});

routes.use('/processimg', processImge);

export default routes;
