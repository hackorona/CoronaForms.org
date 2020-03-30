import { readFileSync } from "fs";
import { storagePath } from "./utils";
import textToSVG from "./text-to-svg";

const { PDFDocument, rgb } = require("pdf-lib");

class PDFWriter {

    private pdf: any;

    public async loadBankPDF(bankName: string): Promise<PDFWriter> {
        this.pdf = await PDFDocument.load(readFileSync(storagePath("/pdfs/" + bankName + ".pdf")));
        return this;
    }

    public drawOnPage(pageNumber: number) {
        const pdf = this.pdf;
        const page = this.pdf.getPages()[pageNumber];
        return {
            text(text: string, x: number, y: number) {
                const svg: any = textToSVG(text);
                page.moveTo(x - svg.width, y);
                page.drawSvgPath(svg.svgPath, { color: rgb(0, 0, 0) });
            },
            box(x: number, y: number) {
                page.moveTo(x - 7, y - 7);
                page.drawRectangle({ width: 7, height: 7 }, { color: rgb(0, 0, 0) });
            },
            async image(base64Image: string, x: number, y: number): Promise<boolean> {
                if (base64Image.indexOf("base64,") === -1) {
                    return false;
                }

                const bytes = Buffer.from(base64Image.split("base64,")[1], "base64");
                const pngImage = await pdf.embedPng(bytes);
                const pngDims = pngImage.scale(0.5);

                page.drawImage(pngImage, {
                    x,
                    y,
                    width: pngDims.width,
                    height: pngDims.height,
                });

                return true;
            }
        }
    }

    public async save() {
        return await this.pdf.save();
    }

}

export default PDFWriter