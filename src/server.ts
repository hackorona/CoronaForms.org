import fs from "fs";
import cors from "cors";
import dotenv from "dotenv";
import bankPdf from "./bank-pdf";
import geoipLite from "geoip-lite";
import { urlencoded, json } from "body-parser";
import isoCountryCodes from "./iso-country-codes";
import express, { Application, Request, Response } from "express";
import { storagePath } from "./utils";
const BANKS = new Set(["leumi", "discount", "jerusalem"]);

const app: Application = express();

app.use(express.static('public'))
app.use(urlencoded({ extended: false }));

app.options("/api/v1/submit", cors());
app.post("/api/v1/submit", cors(), json(), (req: Request, res: Response) => {
    let ip = req.headers["cf-connecting-ip"] || req.headers["x-forwarded-for"] || req.connection.remoteAddress;
    let geoData: any = geoipLite.lookup(ip.toString());
    let countryName = isoCountryCodes.get(geoData.country);
    fs.writeFileSync(storagePath(Math.random() + ".json"), JSON.stringify({ ip, countryName, ...req.body }, null, 2), "utf8");
    res.json({ ok: true });
});

app.get("/api/v1/geo", cors(), (req: Request, res: Response) => {
    let ip = req.headers["cf-connecting-ip"] || req.headers["x-forwarded-for"] || req.connection.remoteAddress;
    if (ip === "::1") {
        ip = "2a00:a040:18a:aec9:1c1f:26d3:86cc:9c41";
    }
    let geoData: any = geoipLite.lookup(ip.toString());
    geoData.countryName = isoCountryCodes.get(geoData.country);
    res.json(geoData);
});

app.post("/api/v1/pdf/:bank", async (req: Request, res: Response) => {
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
    res.send(await bankPdf(req.params.bank, req.body));
    res.end();
});

dotenv.config();

app.listen(parseInt(process.env.HTTP_PORT), () => {
    console.log("Up & Running!");
});

