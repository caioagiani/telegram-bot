import TelegramBot from "node-telegram-bot-api";
import { token_bot } from "../config/index";

const bot = new TelegramBot(token_bot, { polling: true });

module.exports = bot;