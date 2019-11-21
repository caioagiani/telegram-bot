const bot = require("../src/server");
const request = require("request");

module.exports = (msg, match) => {
    const chatId = msg.chat.id;
    const macAddres = match[1];
    const keyMac = "at_XVd1u1W5nVrzPHE15hvx6k5o7nSc0";

    request(
        `https://api.macaddress.io/v1?apiKey=${keyMac}&output=json&search=${macAddres}`,
        (error, response, body) => {
            if (!error && response.statusCode == 200) {
                const res = JSON.parse(body);
                const { companyName, companyAddress, countryCode } = res.vendorDetails;

                bot.sendMessage(
                    chatId,
                    `@${msg.from.username}, resultado do mac ***${macAddres}***:\n\n` + `Name: ${companyName}\nCountry: ${countryCode}\nAddress: ${companyAddress}`,
                    {
                        parse_mode: "markdown"
                    }
                );
            }
        }
    );
}