import bot from "../src/server";
import request from "request";

module.exports = async (msg, match) => 
{
    const chatId = msg.chat.id;
    const macAddres = match[1];
    const keyMac = "at_XVd1u1W5nVrzPHE15hvx6k5o7nSc0";

    bot.sendMessage(chatId,`@${msg.from.username}, consultando MAC, aguarde ...\n\n`);

    await request(
        `https://api.macaddress.io/v1?apiKey=${keyMac}&output=json&search=${macAddres}`,
        (error, response, body) => {
            if (!error && response.statusCode == 200) {
                const res = JSON.parse(body);
                const { companyName, companyAddress, countryCode } = res.vendorDetails;

                bot.sendMessage(
                    chatId,
                    `*Ação*: Localizar MAC\n*Mac*: ${macAddres}\n*Name*: ${companyName}\n*Country*: ${countryCode}`,
                    {
                        parse_mode: "markdown"
                    }
                );
            }
        }
    );
}