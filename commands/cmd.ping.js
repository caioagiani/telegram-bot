import bot from "../src/server";
import pingTeste from "ping";

module.exports = async (msg, match) => 
{
    const chatId = msg.chat.id;
    const host = match[1];

    pingTeste.promise.probe(host).then(function(res) {
        
        let result = res.output.includes("Esgotado") || res.output.includes("tente\r\nnovamente")
        ? "died \u{274C}"
        : "lived \u{2705}";

        bot.sendMessage(
            chatId,
            `@${msg.from.username}, resultado ping: \n\n${host} is: ${result}`,
            {
                parse_mode: "markdown"
            }
        );
        //console.log(res);
    });
}