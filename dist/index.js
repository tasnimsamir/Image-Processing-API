"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const routes_1 = __importDefault(require("./routes"));
const app = (0, express_1.default)(); // create an application object
const port = 3000;
// define a route handler for the default home page : create an endpoint
// app.use: middleware that apply all routes in my application with prefix  : /api
app.use('/api', routes_1.default);
// start the express server : listen on port
app.listen(port, () => {
    console.log(`server started at http://localhost:${port}`);
});
exports.default = app;
