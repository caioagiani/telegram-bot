import bot from "../src/server";
import request from "request";

module.exports = async (msg, match) => 
{
    const chatId = msg.chat.id;
    const host = match[1];
    const user = '@' + msg.from.username || msg.from.first_name;

    let options = {
        method: 'POST',
        url: 'https://nettools.club/_cisco_rlc_ajax',
        form: { 'inspeed': host }
    };

    await request(options, (error, response, body) => {
        if (error || response.statusCode !== 200) return bot.sendMessage(chatId,`${user}, ${host} não localizado!`);

        bot.sendMessage(
            chatId, 
            `${user}, rate-limit result: \n\n*Input*: ${body}`, 
            { parse_mode: "markdown" }
        );

        console.log( { status: 'command', 'user': user, 'command': host, return: true } ); 
    });
}