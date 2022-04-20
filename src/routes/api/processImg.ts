import express from 'express';
import path from 'path';
import resizeImg from '../../utilities/resizeImg';
import queryParams from '../../middlewares/validation';
import isExist from '../../middlewares/isExist';
import { existsSync } from 'fs';

const processImge = express.Router();

processImge.get(
  '/',
  queryParams,
  isExist,
  (req: express.Request, res: express.Response): void => {
    const name = req.query.name as string;
    const width = req.query.width as string;
    const height = req.query.height as string;

    const imgLoc = path.resolve('./') + `/src/assets/images/${name}.jpg`;
    const out_dir = path.resolve('./') + '/src/assets/resizedImages';
    const resizedimg = out_dir + `/${name}_${width}_${height}.jpg`;

    if (!width && !height) {
      res.status(200).sendFile(imgLoc);
    } else {
      if (!existsSync(resizedimg)) {
        try {
          resizeImg(imgLoc, parseInt(width), parseInt(height)).then(() => {
            res.status(200).sendFile(resizedimg);
          });
        } catch (error) {
          res.status(400).send(`ERROR in processing image: ${error}`);
        }
      } else {
        res.sendFile(resizedimg);
      }
    }
  }
);

export default processImge;
