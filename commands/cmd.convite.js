import bot from "../src/server";

module.exports = (msg) => 
{
    const chatId = msg.chat.id;
    const user = '@' + msg.from.username || msg.from.first_name;

    bot.sendMessage(chatId, user + ' link de convite: https://t.me/dude76telecom');
}