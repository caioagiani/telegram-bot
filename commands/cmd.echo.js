import bot from "../src/server";

module.exports = (msg, match) => 
{
    const chatId = msg.chat.id;
    const resp = match[1];
    
    bot.sendMessage(chatId, '🤖 ' + resp);
}