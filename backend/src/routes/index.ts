import express from 'express';
import resizeRoute from './api/resizeImages';
import getRoute from './api/getImage';

const routes = express.Router();

routes.get('/', (req,res) => {
    res.send('Main API Route..');
});

routes.use('/resize',resizeRoute);
routes.use('/getimage',getRoute);

export default routes;