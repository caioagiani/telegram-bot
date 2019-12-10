import bot from "../src/server";
import request from "request";

module.exports = (msg, match) => 
{
    const chatId = msg.chat.id;
    const portalId = match[1];

    request(
        `http://casite-1162261.cloudaccess.net/portal/api.php?name=${portalId}`,
        (error, response, body) => {
            if (!error && response.statusCode == 200) {
                if (!body.includes('password')) return bot.sendMessage(chatId,`@${msg.from.username}, cliente não localizado!`);
                
                    const res = JSON.parse(body);
                    const { cliente, username, password } = res.dados;

                    bot.sendMessage(
                    chatId,
                    `@${msg.from.username}, portal criado com sucesso:\n\nCliente: ${cliente}\nUsuário: ${username}\nSenha: ${password}`,
                    {
                        parse_mode: "markdown"
                    }
                );
            }
        }
    );
}