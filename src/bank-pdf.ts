import PDFWriter from "./pdf-writer";
import { storagePath } from "./utils";

export default async (bank: string, body: any) => {
    const mapping = require(storagePath("/pdfs-mappings/" + bank + ".json"));
    const pdfWriter = new PDFWriter();

    await pdfWriter.loadBankPDF(bank);

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

    return Buffer.from(await pdfWriter.save());
};