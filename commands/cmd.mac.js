import bot from "../src/server";
import request from "request";
import { mac_key } from "../config/index";

module.exports = async (msg, match) => {
  const chatId = msg.chat.id;
  const macAddres = match[1];
  const keyMac = mac_key;
  const user = "@" + msg.from.username || msg.from.first_name;

  bot.sendMessage(chatId, `${user}, consultando MAC, aguarde ...\n\n`);

  request(
    `https://api.macaddress.io/v1?apiKey=${keyMac}&output=json&search=${macAddres}`,
    (error, response, body) => {
      if (error || response.statusCode !== 200)
        return bot.sendMessage(
          chatId,
          `${user}, ${host} erro interno no servidor!`
        );

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
