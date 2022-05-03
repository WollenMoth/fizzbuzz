require("dotenv").config();
const TelegramBot = require("node-telegram-bot-api");
const ExplorerController = require("./controllers/ExplorerController");

const token = process.env.TOKEN;

const bot = new TelegramBot(token, { polling: true });

bot.onText(/\/echo (.+)/, (msg, match) => {
    const chatId = msg.chat.id;
    const resp = match[1];

    bot.sendMessage(chatId, resp);
});

bot.on("message", (msg) => {
    const chatId = msg.chat.id;
    const text = msg.text.toLowerCase();
    const numberToApplyFb = parseInt(text);
    let responseBot;

    if (text === "node" || text === "java") {
        const usernames =
            ExplorerController.getExplorersUsernamesByMission(text);
        responseBot = `Explorers en ${text}:\n\n${usernames.join(", ")}`;
    } else if (!isNaN(numberToApplyFb)) {
        const fizzbuzzTrick = ExplorerController.getValidation(numberToApplyFb);
        responseBot = `Tu número es: ${numberToApplyFb}. Validación: ${fizzbuzzTrick}`;
    } else {
        responseBot = "Envía un número válido";
    }

    bot.sendMessage(chatId, responseBot);
});
