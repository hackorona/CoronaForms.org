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
const cors_1 = __importDefault(require("cors"));
const dotenv_1 = __importDefault(require("dotenv"));
const bank_pdf_1 = __importDefault(require("./bank-pdf"));
const geoip_lite_1 = __importDefault(require("geoip-lite"));
const body_parser_1 = require("body-parser");
const iso_country_codes_1 = __importDefault(require("./iso-country-codes"));
const express_1 = __importDefault(require("express"));
const BANKS = new Set(["leumi", "discount", "jerusalem"]);
const app = express_1.default();
app.use(express_1.default.static('public'));
app.use(body_parser_1.urlencoded({ extended: false }));
app.get("/api/v1/geo", cors_1.default(), (req, res) => {
    let ip = req.headers["cf-connecting-ip"] || req.headers["x-forwarded-for"] || req.connection.remoteAddress;
    if (ip === "::1") {
        ip = "2a00:a040:18a:aec9:1c1f:26d3:86cc:9c41";
    }
    let geoData = geoip_lite_1.default.lookup(ip.toString());
    geoData.countryName = iso_country_codes_1.default.get(geoData.country);
    res.json(geoData);
});
app.post("/api/v1/pdf/:bank", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    if (!BANKS.has(req.params.bank)) {
        return res.status(400).json({ error: "UNSUPPORTED_BANK", banks: Array.from(BANKS) });
    }
    if (req.body.full_name) {
        let parts = req.body.full_name.trim().split(" ");
        req.body.first_name = parts[0];
        req.body.last_name = parts[1];
    }
    if (req.body.full_name_2) {
        let parts = req.body.full_name_2.trim().split(" ");
        req.body.first_name_2 = parts[0];
        req.body.last_name_2 = parts[1];
    }
    if (req.body.full_name_3) {
        let parts = req.body.full_name_3.trim().split(" ");
        req.body.first_name_3 = parts[0];
        req.body.last_name_3 = parts[1];
    }
    res.setHeader('Content-Disposition', `${req.body.download === "1" ? "attachment" : "inline"}; filename="request.pdf"`);
    res.setHeader('Content-Type', 'application/pdf');
    res.send(yield bank_pdf_1.default(req.params.bank, req.body));
    res.end();
}));
dotenv_1.default.config();
app.listen(parseInt(process.env.HTTP_PORT), () => {
    console.log("Up & Running!");
});
//# sourceMappingURL=server.js.map