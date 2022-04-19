"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sharp_1 = __importDefault(require("sharp"));
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
const out_dir = path_1.default.resolve('./') + "/src/assets/resizedImages";
const resizeImg = (filepath, width, height) => __awaiter(void 0, void 0, void 0, function* () {
    const path = filepath.split('/');
    const imgname = path[path.length - 1].split('.')[0];
    const outputimg = out_dir + `/${imgname}_${width}_${height}.jpg`;
    try {
        // console.log(`filepath= ${filepath}`);
        let data = yield (0, sharp_1.default)(filepath).resize(width, height).jpeg().toBuffer();
        fs_1.default.writeFileSync(outputimg, data);
    }
    catch (error) {
        console.log(error);
    }
});
exports.default = resizeImg;
