import { storagePath } from "./utils";
const { loadSync } = require("text-to-svg");
const textToSVG = loadSync(storagePath("/fonts/FrankRuhlLibre-Medium.ttf"));

function normalizeText(text: string): string {
    let output: string[] = [];
    let words = text.split(" ");
    let hasHebrew: boolean = false;
    for (let word of words) {
        if (word.match(/[\u0590-\u05FF]/)) {
            output.unshift(word.split("").reverse().join(""));
            hasHebrew = true;
        } else {
            output.unshift(word);
        }
    }
    return output.join(" ");
}

const textToSVGWrapper = (text: string, fontSize: number = 12) => {
    const options = { x: 0, y: 0, fontSize, anchor: "top", attributes: { fill: "black" } };
    const svg: string = textToSVG.getSVG(normalizeText(text), options);
    const svgPath: string = svg.split('<path fill="black" d="')[1].split('"')[0];
    const width: number = parseFloat(svg.split('width="')[1].split('"')[0]);
    const height: number = parseFloat(svg.split('height="')[1].split('"')[0]);
    return { svgPath, width, height }
};

export default textToSVGWrapper;