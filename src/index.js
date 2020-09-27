import bot from "./server";

import join from "../events/event.join";
import left from "../events/event.left";

import {
  mac,
  echo,
  ppoe,
  ping,
  help,
  whois,
  cisco,
  ipcalc,
  portal,
  convite,
  traceroute,
} from "../commands";

bot.onText(/\/help/, help);
bot.onText(/\/mac (.+)/, mac);
bot.onText(/\/echo (.+)/, echo);
bot.onText(/\/ppoe (.+)/, ppoe);
bot.onText(/\/ping (.+)/, ping);
bot.onText(/\/convite/, convite);
bot.onText(/\/whois (.+)/, whois);
bot.onText(/\/cisco (.+)/, cisco);
bot.onText(/\/portal (.+)/, portal);
bot.onText(/\/ipcalc (.+)/, ipcalc);
bot.onText(/\/traceroute (.+)/, traceroute);

bot.on("new_chat_members", join);
bot.on("left_chat_member", left);
