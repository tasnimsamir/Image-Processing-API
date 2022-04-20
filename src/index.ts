import express from 'express';
import routes from './routes';

const app = express(); // create an application object
const port = 5000;

// define a route handler for the default home page : create an endpoint
// app.use: middleware that apply all routes in my application with prefix  : /api
app.use('/api', routes);

// start the express server : listen on port
app.listen(port, () => {
  console.log(`server started at http://localhost:${port}`);
});

export default app;
