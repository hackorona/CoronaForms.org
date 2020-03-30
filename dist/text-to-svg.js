"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const utils_1 = require("./utils");
const { loadSync } = require("text-to-svg");
const textToSVG = loadSync(utils_1.storagePath("/fonts/FrankRuhlLibre-Medium.ttf"));
function normalizeText(text) {
    let output = [];
    let words = text.split(" ");
    let hasHebrew = false;
    for (let word of words) {
        if (word.match(/[\u0590-\u05FF]/)) {
            output.unshift(word.split("").reverse().join(""));
            hasHebrew = true;
        }
        else {
            output.unshift(word);
        }
    }
    return output.join(" ");
}
const textToSVGWrapper = (text, fontSize = 12) => {
    const options = { x: 0, y: 0, fontSize, anchor: "top", attributes: { fill: "black" } };
    const svg = textToSVG.getSVG(normalizeText(text), options);
    const svgPath = svg.split('<path fill="black" d="')[1].split('"')[0];
    const width = parseFloat(svg.split('width="')[1].split('"')[0]);
    const height = parseFloat(svg.split('height="')[1].split('"')[0]);
    return { svgPath, width, height };
};
exports.default = textToSVGWrapper;
//# sourceMappingURL=text-to-svg.js.map