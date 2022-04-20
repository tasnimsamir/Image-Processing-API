import express from 'express';
import path from 'path';
import { existsSync, mkdirSync } from 'fs';

// Middleware to check if :
// 1- image is exist in the directory or not
// 2- make images directory if it's not found
// 3- make thumbnails directory if it's not found

const isExist = (
  req: express.Request,
  res: express.Response,
  next: Function
): express.Response | void => {
  const filename = req.query.name as string;
  const imgDir = path.resolve('./') + `/src/assets/images`;
  const thumbnails = path.resolve('./') + `/src/assets/resizedImages`;
  const imgPath = imgDir + `/${filename}.jpg`;

  if (!existsSync(imgDir)) {
    mkdirSync(imgDir);
  }
  if (!existsSync(thumbnails)) {
    mkdirSync(thumbnails);
  }
  if (existsSync(imgPath)) {
    next();
  } else {
    res.status(400).send(`ERROR!! image: ${filename} is not found.`);
  }
};

export default isExist;
