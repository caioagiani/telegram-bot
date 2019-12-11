import bot from "../src/server";

module.exports = (msg) => 
{
    const chatId = msg.chat.id;
    const user = '@' + msg.from.username || msg.from.first_name;

    bot.sendMessage( 
        chatId,
        `${user} comandos bot:\n\n` +
        `/mac _<mac> consulta mac equipamento_\n` + 
        `/ppoe _<cliente> consultar ppoe do cliente_\n` + 
        `/portal _<cliente> criar portal do assinante_\n` + 
        `/cisco _<bandwidth> taxa de dados em bits por segundo_\n` + 
        `/whois _<destino> consultar informações do destino via TCP_\n` + 
        `/ping _<ip> protocolo ICMP destino_\n` + 
        `/traceroute _<ip> rastreia rota IP, ICMP_\n` + 
        `/convite _obtenha o link de invite para o grupo_`,
        { parse_mode: "markdown" }
    );
}