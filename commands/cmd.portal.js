import bot from "../src/server";
import request from "request";

module.exports = async (msg, match) => {
  const chatId = msg.chat.id;
  const portalId = match[1];
  const user = "@" + msg.from.username || msg.from.first_name;

  bot.sendMessage(
    chatId,
    `${user}, criando portal do assinante, aguarde ...\n\n`
  );

  request(
    `http://casite-1162261.cloudaccess.net/portal/api.php?name=${portalId}`,
    (error, response, body) => {
      if (error || response.statusCode !== 200)
        return bot.sendMessage(
          chatId,
          `${user}, ${host} erro interno no servidor!`
        );
      if (!body.includes("password"))
        return bot.sendMessage(
          chatId,
          `${user}, cliente ${ppoeId} não localizado!`
        );

      const res = JSON.parse(body);
      const { cliente, username, password } = res.dados;

      bot.sendMessage(
        chatId,
        `*Ação*: Portal do assinante\n*Cliente*: ${cliente}\n*Usuário*: ${username}\n*Senha*: ${password}`,
        { parse_mode: "markdown" }
      );
    }
  );
};
