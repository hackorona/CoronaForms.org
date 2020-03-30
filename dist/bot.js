"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
const node_telegram_bot_api_1 = __importDefault(require("node-telegram-bot-api"));
dotenv_1.default.config();
const bot = new node_telegram_bot_api_1.default(process.env.TELEGRAM_TOKEN, { polling: true });
bot.onText(/s/, (msg) => {
    const chatId = msg.chat.id;
    bot.sendMessage(chatId, "באיזה בנק אתה?", {
        reply_markup: {
            keyboard: [[{ text: "בנק לאומי" }], [{ text: "בנק ירושלים" }], [{ text: "בנק דיסקונט" }]],
            resize_keyboard: false,
            one_time_keyboard: true
        }
    });
});
//# sourceMappingURL=bot.js.map