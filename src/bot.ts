import dotenv from "dotenv";
import TelegramBot from "node-telegram-bot-api";

dotenv.config();

const bot = new TelegramBot(process.env.TELEGRAM_TOKEN, { polling: true });

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