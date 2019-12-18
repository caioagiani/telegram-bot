import TelegramBot from "node-telegram-bot-api";
import { token_bot } from "../config/index"; 

module.exports = new TelegramBot(token_bot, { polling: true });