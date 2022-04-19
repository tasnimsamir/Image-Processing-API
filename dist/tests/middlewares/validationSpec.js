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
const supertest_1 = __importDefault(require("supertest"));
const __1 = __importDefault(require("../.."));
const request = (0, supertest_1.default)(__1.default);
describe("Testing Validations of the APP", () => {
    it("Endpoint: /api/processimg", () => __awaiter(void 0, void 0, void 0, function* () {
        const response = yield request.get("/api/processimg");
        expect(response.status).toBe(400);
        expect(response.text).toBe("ERROR!!! You should enter filename");
    }));
    it("Endpoint: /api/processimg?name=fjord&width=200", () => __awaiter(void 0, void 0, void 0, function* () {
        const response = yield request.get("/api/processimg?name=fjord&width=200");
        expect(response.status).toBe(400);
        expect(response.text).toBe("ERROR!!! You should enter required height");
    }));
    it("Endpoint: /api/processimg?name=fjord&height=200", () => __awaiter(void 0, void 0, void 0, function* () {
        const response = yield request.get("/api/processimg?name=fjord&height=200");
        expect(response.status).toBe(400);
        expect(response.text).toBe("ERROR!!! You should enter required width");
    }));
    it("Endpoint: /api/processimg?name=fjord&width='200'&height=210", () => __awaiter(void 0, void 0, void 0, function* () {
        const response = yield request.get("/api/processimg?name=fjord&width='200'&height=210");
        expect(response.status).toBe(400);
        expect(response.text).toBe("ERROR!!! width should be Number");
    }));
    it("Endpoint: /api/processimg?name=fjord&width=200&height='210'", () => __awaiter(void 0, void 0, void 0, function* () {
        const response = yield request.get("/api/processimg?name=fjord&width=200&height='210'");
        expect(response.status).toBe(400);
        expect(response.text).toBe("ERROR!!! height should be Number");
    }));
    it("Endpoint: /api/processimg?name=fjord&width=-200&height=210", () => __awaiter(void 0, void 0, void 0, function* () {
        const response = yield request.get("/api/processimg?name=fjord&width=-200&height=210");
        expect(response.status).toBe(400);
        expect(response.text).toBe("ERROR!!! width should be positive number");
    }));
    it("Endpoint: /api/processimg?name=fjord&width=200&height=-210", () => __awaiter(void 0, void 0, void 0, function* () {
        const response = yield request.get("/api/processimg?name=fjord&width=200&height=-210");
        expect(response.status).toBe(400);
        expect(response.text).toBe("ERROR!!! height should be positive number");
    }));
});
