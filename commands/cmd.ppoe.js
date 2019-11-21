const bot = require("../src/server");
const request = require("request");

module.exports = (msg, match) => {
    const chatId = msg.chat.id;
    const ppoeId = match[1];

    request(
        `http://casite-1162261.cloudaccess.net/ppoe/api.php?name=${ppoeId}`,
        (error, response, body) => {
        if (!error && response.statusCode == 200) {
            if (!body.includes('ppoe')) return bot.sendMessage(chatId,`@${msg.from.username}, PPoE não localizado!`);

                const res = JSON.parse(body);
                const { numero, produto, ppoe } = res.dados;

                bot.sendMessage(
                    chatId,
                    `@${msg.from.username}, resultado do PPoE ***${ppoeId}***:\n\nContrato: ${produto}\nPPoE: ${ppoe}`,
                    {
                        parse_mode: "markdown"
                    }
                );
            }
        }
    );
}