"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const path_1 = __importDefault(require("path"));
const resizeImg_1 = __importDefault(require("../../utilities/resizeImg"));
const validation_1 = __importDefault(require("../../middlewares/validation"));
const isExist_1 = __importDefault(require("../../middlewares/isExist"));
const fs_1 = require("fs");
const processImge = express_1.default.Router();
processImge.get('/', validation_1.default, isExist_1.default, (req, res) => {
    const name = req.query.name;
    const width = req.query.width;
    const height = req.query.height;
    const imgLoc = path_1.default.resolve("./") + `/src/assets/images/${name}.jpg`;
    const out_dir = path_1.default.resolve('./') + "/src/assets/resizedImages";
    const resizedimg = out_dir + `/${name}_${width}_${height}.jpg`;
    if (!width && !height) {
        res.status(200).sendFile(imgLoc);
    }
    else {
        if (!(0, fs_1.existsSync)(resizedimg)) {
            try {
                (0, resizeImg_1.default)(imgLoc, parseInt(width), parseInt(height)).then(() => {
                    res.status(200).sendFile(resizedimg);
                });
            }
            catch (error) {
                res.status(400).send(`ERROR in processing image: ${error}`);
            }
            ;
        }
        else {
            res.status(400).send('The resized image is alraedy exists!');
        }
    }
    ;
});
exports.default = processImge;
