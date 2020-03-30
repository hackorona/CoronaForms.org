import dotenv from "dotenv";
import bankPdf from "./bank-pdf";
import { urlencoded } from "body-parser";
import express, { Application, Request, Response } from "express";

const BANKS = new Set(["leumi", "discount", "jerusalem"]);

const app: Application = express();

app.use(express.static('public'))
app.use(urlencoded({ extended: false }));

app.post("/api/v1/pdf/:bank", async (req: Request, res: Response) => {
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
    res.send(await bankPdf(req.params.bank, req.body));
    res.end();
});

dotenv.config();

app.listen(parseInt(process.env.HTTP_PORT), () => {
    console.log("Up & Running!");
});

