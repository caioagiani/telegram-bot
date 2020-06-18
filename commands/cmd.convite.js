import bot from "../src/server";
import { invite_key } from "../config/index";

module.exports = (msg) => {
  const chatId = msg.chat.id;
  const user = "@" + msg.from.username || msg.from.first_name;

  bot.sendMessage(
    chatId,
    `${user} link de convite: https://t.me/${invite_key}`
  );
};
