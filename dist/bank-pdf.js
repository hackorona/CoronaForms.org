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
const pdf_writer_1 = __importDefault(require("./pdf-writer"));
const utils_1 = require("./utils");
exports.default = (bank, body) => __awaiter(this, void 0, void 0, function* () {
    const mapping = require(utils_1.storagePath("/pdfs-mappings/" + bank + ".json"));
    const pdfWriter = new pdf_writer_1.default();
    yield pdfWriter.loadBankPDF(bank);
    for (let key in mapping) {
        let field = mapping[key];
        switch (field.type) {
            case "STRING":
            case "NUMBER":
            case "DATE":
                if (body[key]) {
                    pdfWriter.drawOnPage(field.page || 0).text(body[key], field.x, field.y);
                }
                break;
            case "BOOLEAN":
                if (body[key]) {
                    pdfWriter.drawOnPage(field.page || 0).box(field.x, field.y);
                }
                break;
            case "CURRENT_DATE":
                if (body[key]) {
                    pdfWriter.drawOnPage(field.page || 0).text(new Date().toISOString().slice(0, 10), field.x, field.y);
                }
                break;
            case "SIG":
                if (body[key]) {
                    pdfWriter.drawOnPage(field.page || 0).image(body[key], field.x, field.y);
                }
                break;
        }
    }
    return Buffer.from(yield pdfWriter.save());
});
//# sourceMappingURL=bank-pdf.js.map