import express from 'express';

const logger = (req: express.Request,res: express.Response,next: Function):void =>{
    let url = req.baseUrl;
    console.log(`Visited Url: ${url}`);
    next();
};

export default logger;