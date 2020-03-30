"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
const bank_pdf_1 = __importDefault(require("./bank-pdf"));
const body_parser_1 = require("body-parser");
const express_1 = __importDefault(require("express"));
const BANKS = new Set(["leumi", "discount", "jerusalem"]);
const app = express_1.default();
app.use(express_1.default.static('public'));
app.use(body_parser_1.urlencoded({ extended: false }));
app.post("/api/v1/pdf/:bank", (req, res) => __awaiter(this, void 0, void 0, function* () {
    if (!BANKS.has(req.params.bank)) {
        return res.status(400).json({ error: "UNSUPPORTED_BANK", banks: Array.from(BANKS) });
    }
    if (req.body.full_name) {
        const parts = req.body.full_name.trim().split(" ");
        req.body.first_name = parts[0];
        req.body.last_name = parts[1];
    }
    res.setHeader('Content-Disposition', 'inline; filename="file.pdf"');
    res.setHeader('Content-Type', 'application/pdf');
    res.send(yield bank_pdf_1.default(req.params.bank, req.body));
    res.end();
}));
dotenv_1.default.config();
app.listen(parseInt(process.env.HTTP_PORT), () => {
    console.log("Up & Running!");
});
//# sourceMappingURL=server.js.map