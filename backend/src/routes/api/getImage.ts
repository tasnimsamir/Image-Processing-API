import express from 'express';
import path from 'path';
import logger from '../../utilities/logger';

const getRoute = express.Router();

getRoute.get('/',logger, (req,res) => {
    const name = req.query.name as string;
    const imgLocation = path.resolve("./")+`/src/assets/images/${name}.jpg`;
    res.sendFile(imgLocation);
});

export default getRoute;