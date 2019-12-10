import bot from "../src/server";

module.exports = (msg) => 
{
    const chatId = msg.chat.id;
    const user = '@' + msg.from.username || msg.from.first_name;

    bot.sendMessage( 
        chatId,
        `*Ação*: Help\n\n` +
        `/mac <mac> consulta mac equipamento\n` + 
        `/ppoe <cliente> consultar ppoe do cliente\n` + 
        `/portal <cliente> criar portal do assinante\n` + 
        `/ping <ip> protocolo ICMP destino\n` + 
        `/convite obtenha o link de invite para o grupo`,
        {
            parse_mode: "markdown"
        }
    );
}