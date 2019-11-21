const bot = require("../src/server");
const pingTeste = require("ping");

module.exports = (msg, match) => {
    const chatId = msg.chat.id;
    const host = match[1];

    pingTeste.promise.probe(host).then(function(res) {
        let result = res.output.includes("Esgotado")
        ? "died \u{274C}"
        : "lived \u{2705}";

        bot.sendMessage(
            chatId,
            `@${msg.from.username} ping: ${host} result is: ${result}`,
            {
                parse_mode: "markdown"
            }
        );
        //console.log(res);
    });
}