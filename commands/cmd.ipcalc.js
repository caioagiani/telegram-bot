import bot from "../src/server";
import request from "request";

module.exports = async (msg, match) => {
  const chatId = msg.chat.id;
  const host = match[1];
  const mask = host.split("/");
  const user = "@" + msg.from.username || msg.from.first_name;

  request(
    `https://uploadbeta.com/api/ipcalc/?cached&s=${host}/${mask[1]}`,
    (error, response, body) => {
      if (error || response.statusCode !== 200)
        return bot.sendMessage(
          chatId,
          `${user}, ${host} erro interno no servidor!`
        );

      bot.sendMessage(chatId, `${user}, resultado ipcalc: \n\n${body}`, {
        parse_mode: "markdown",
      });
    }
  );
};
