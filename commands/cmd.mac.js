import bot from "../src/server";
import request from "request";

module.exports = async (msg, match) => {
  const chatId = msg.chat.id;
  const macAddres = match[1];
  const user = "@" + msg.from.username || msg.from.first_name;

  bot.sendMessage(chatId, `${user}, consultando MAC, aguarde ...\n\n`);

  request(
    `https://api.macaddress.io/v1?apiKey=${process.env.MAC_API_KEY}&output=json&search=${macAddres}`,
    (error, response, body) => {
      if (error || response.statusCode !== 200)
        return bot.sendMessage(chatId, `${user}, erro interno no servidor!`);

      const res = JSON.parse(body);
      const { companyName, companyAddress, countryCode } = res.vendorDetails;

      bot.sendMessage(
        chatId,
        `*Ação*: Localizar MAC\n` +
          `*Mac*: ${macAddres}\n` +
          `*Name*: ${companyName}\n` +
          `*Country*: ${countryCode}\n` +
          `*Company*: ${companyAddress}`,
        { parse_mode: "markdown" }
      );
    }
  );
};
