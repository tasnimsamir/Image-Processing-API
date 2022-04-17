import express from 'express';
import path from 'path';
import logger from '../../utilities/logger';
import resizeImg from '../../utilities/resizeImage';

const out_dir = path.resolve('./')+ "/src/assets/resizedImages"

const resizeRoute = express.Router();

resizeRoute.get('/',logger, (req,res) => {
    const name = req.query.name as string;
    const width = req.query.width as string;
    const height = req.query.height as string;

    const imgLocation = path.resolve("./")+`/src/assets/images/${name}.jpg`;
    resizeImg(imgLocation,parseInt(width),parseInt(height)).then(()=>{
        let resizedimg = out_dir + `/${name}_${width}_${height}.jpg`;
        res.sendFile(resizedimg);
    });

    
});

export default resizeRoute;