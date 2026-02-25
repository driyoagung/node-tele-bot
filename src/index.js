const TelegramBot = require("node-telegram-bot-api");
require("dotenv").config();

const token = process.env.BOT_TOKEN;

if (!token) {
    console.error("BOT_TOKEN tidak ditemukan di file .env");
    process.exit(1);
}

const bot = new TelegramBot(token, { polling: true });

// Handler untuk command /start
bot.onText(/\/start/, (msg) => {
    const chatId = msg.chat.id;
    bot.sendMessage(chatId, "Halo! Saya adalah bot Telegram. Ada yang bisa saya bantu?");
});

// Handler untuk pesan biasa
bot.on("message", (msg) => {
    const chatId = msg.chat.id;
    const text = msg.text;

    if (text && !text.startsWith("/")) {
        bot.sendMessage(chatId, `Anda mengirim: ${text}`);
    }
});

console.log("Bot sedang berjalan...");

module.exports = bot;
