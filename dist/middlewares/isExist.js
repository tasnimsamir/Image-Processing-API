"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const path_1 = __importDefault(require("path"));
const fs_1 = require("fs");
// Middleware to check if image is exist in the directory or not 
const isExist = (req, res, next) => {
    const filename = req.query.name;
    const imgDir = path_1.default.resolve('./') + `/src/assets/images`;
    const imgPath = imgDir + `/${filename}.jpg`;
    if (!(0, fs_1.existsSync)(imgDir)) {
        (0, fs_1.mkdirSync)(imgDir);
    }
    ;
    if ((0, fs_1.existsSync)(imgPath)) {
        next();
    }
    else {
        res.status(400).send(`ERROR!! image: ${filename} is not found.`);
    }
    ;
};
exports.default = isExist;
