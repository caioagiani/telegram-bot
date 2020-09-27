import TelegramBot from "node-telegram-bot-api";

module.exports = new TelegramBot(process.env.TOKEN_BOT, {
  polling: {
    interval: 300,
    autoStart: true,
    params: {
      timeout: 10,
    },
  },
});
