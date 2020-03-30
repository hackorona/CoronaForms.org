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
const fs_1 = require("fs");
const utils_1 = require("./utils");
const text_to_svg_1 = __importDefault(require("./text-to-svg"));
const { PDFDocument, rgb } = require("pdf-lib");
class PDFWriter {
    loadBankPDF(bankName) {
        return __awaiter(this, void 0, void 0, function* () {
            this.pdf = yield PDFDocument.load(fs_1.readFileSync(utils_1.storagePath("/pdfs/" + bankName + ".pdf")));
            return this;
        });
    }
    drawOnPage(pageNumber) {
        const pdf = this.pdf;
        const page = this.pdf.getPages()[pageNumber];
        return {
            text(text, x, y) {
                const svg = text_to_svg_1.default(text);
                page.moveTo(x - svg.width, y);
                page.drawSvgPath(svg.svgPath, { color: rgb(0, 0, 0) });
            },
            box(x, y) {
                page.moveTo(x - 7, y - 7);
                page.drawRectangle({ width: 7, height: 7 }, { color: rgb(0, 0, 0) });
            },
            image(base64Image, x, y) {
                return __awaiter(this, void 0, void 0, function* () {
                    if (base64Image.indexOf("base64,") === -1) {
                        return false;
                    }
                    const bytes = Buffer.from(base64Image.split("base64,")[1], "base64");
                    const pngImage = yield pdf.embedPng(bytes);
                    const pngDims = pngImage.scale(0.5);
                    page.drawImage(pngImage, {
                        x,
                        y,
                        width: pngDims.width,
                        height: pngDims.height,
                    });
                    return true;
                });
            }
        };
    }
    save() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.pdf.save();
        });
    }
}
exports.default = PDFWriter;
//# sourceMappingURL=pdf-writer.js.map