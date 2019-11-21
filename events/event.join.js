const bot = require("../src/server");

module.exports = msg => {
    const chatId = msg.chat.id;

    bot.sendMessage(
        chatId,
        `@${msg.new_chat_participant.username}, juntou-se ao grupo!`
    );
}