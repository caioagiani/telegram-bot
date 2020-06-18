import bot from "../src/server";
import request from "request";

module.exports = async (msg, match) => {
  const chatId = msg.chat.id;
  const ppoeId = match[1];
  const user = "@" + msg.from.username || msg.from.first_name;

  bot.sendMessage(chatId, `${user}, consultando pPPoE, aguarde ...\n\n`);

  request(
    `http://casite-1162261.cloudaccess.net/ppoe/api.php?name=${ppoeId}`,
    (error, response, body) => {
      if (error || response.statusCode !== 200)
        return bot.sendMessage(
          chatId,
          `${user}, ${host} erro interno no servidor!`
        );
      if (!body.includes("ppoe"))
        return bot.sendMessage(
          chatId,
          `${user}, cliente ${ppoeId} não localizado pPPoE!`
        );

      const res = JSON.parse(body);
      const { numero, produto, ppoe } = res.dados;

      bot.sendMessage(
        chatId,
        `*Ação*: Localizar pPPoE\n*Cliente*: ${ppoeId.toUpperCase()}\n*Contrato*: ${produto}\n*pPPoE*: ${ppoe}`,
        { parse_mode: "markdown" }
      );
    }
  );
};
