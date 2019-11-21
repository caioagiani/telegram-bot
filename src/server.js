const TelegramBot = require("node-telegram-bot-api");
const { token_bot } = require("../config/index");
const bot = new TelegramBot(token_bot, { polling: true });

module.exports = bot;