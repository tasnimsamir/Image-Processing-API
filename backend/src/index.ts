import express from 'express';

const app = express(); // create an application object
const port = 3000;

// start the express server : listen on port
app.listen(port,()=>{
  console.log(`server started at http://localhost:${port}`);
});