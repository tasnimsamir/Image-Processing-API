import express from 'express';
import path from 'path';
import { existsSync, mkdirSync } from 'fs';

// Middleware to check if image is exist in the directory or not 

const isExist = (req: express.Request,res: express.Response,next: Function): express.Response|void =>{
    const filename = req.query.name as string;
    const imgDir =  path.resolve('./') + `/src/assets/images`;
    const imgPath = imgDir + `/${filename}.jpg`;

    if (!existsSync(imgDir)){mkdirSync(imgDir)};
    if (existsSync(imgPath)){next();}
    else{res.status(400).send(`ERROR!! image: ${filename} is not found.`)};
};

export default isExist;