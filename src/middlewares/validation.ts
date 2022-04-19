import express from 'express';

// Middleware to validate all query parameters in endpoints

const queryParams = (req: express.Request,res: express.Response,next: Function): express.Response|void =>{
    const name = req.query.name as string;
    const width = req.query.width as string;
    const height = req.query.height as string;
    
    try{
        if (!name) {return res.status(400).send('ERROR!!! You should enter filename')}
        else if (!width && !height){return next()}
        else if (!width) {return res.status(400).send('ERROR!!! You should enter required width')}
        else if (!height) {return res.status(400).send('ERROR!!! You should enter required height')}
        else if (+width < 0) {return res.status(400).send('ERROR!!! width should be positive number')}
        else if (+height < 0) {return res.status(400).send('ERROR!!! height should be positive number')}
        else if (isNaN(+width)) {return res.status(400).send('ERROR!!! width should be Number')}
        else if (isNaN(+height)) {return res.status(400).send('ERROR!!! height should be Number')}
        
        else{next()}; // go to next middleware
    }
    catch(error){
        res.send(error);
    }
    
};

export default queryParams;