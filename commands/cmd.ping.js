import bot from "../src/server";
import request from "request";
// import pingTeste from "ping";

module.exports = async (msg, match) => {
  const chatId = msg.chat.id;
  const host = match[1];
  const user = "@" + msg.from.username || msg.from.first_name;

  let options = {
    method: "POST",
    url: "https://nettools.club/_ping_ajax",
    form: {
      host: host,
    },
  };

  request(options, (error, response, body) => {
    if (error || response.statusCode !== 200)
      return bot.sendMessage(
        chatId,
        `${user}, ${host} erro interno no servidor!`
      );

    bot.sendMessage(chatId, `${user}, resultado ping: \n\n${body}`);
  });

  // pingTeste.promise.probe(host).then(function(res) {

  //     let result = res.output.includes("Esgotado") || res.output.includes("tente\r\nnovamente")
  //     ? "died \u{274C}"
  //     : "lived \u{2705}";

  //     bot.sendMessage(
  //         chatId,
  //         `${user}, resultado ping: \n\n${host} is: ${result}`,
  //         { parse_mode: "markdown" }
  //     );
  //     //console.log(res);
  // });
};
