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
const resizeImg_1 = __importDefault(require("../../utilities/resizeImg"));
const path_1 = __importDefault(require("path"));
describe('Testing Resize Image API', () => {
    it('Testing Resize Image functionality', () => __awaiter(void 0, void 0, void 0, function* () {
        const testFilePath = path_1.default.resolve('./') + `/src/assets/images/fjord.jpg`;
        const testWidth = 256;
        const testHeight = 512;
        expect(() => __awaiter(void 0, void 0, void 0, function* () {
            yield (0, resizeImg_1.default)(testFilePath, testWidth, testHeight);
        })).not.toThrow();
    }));
});
//# sourceMappingURL=resizeImgSpec.js.map