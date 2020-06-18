const bot = require("../src/server");

module.exports = (msg) => {
  const chatId = msg.chat.id;

  bot.sendMessage(chatId, `@${msg.left_chat_participant.username}, saiu!`);
};
