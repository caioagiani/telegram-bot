import bot from "./src/server";
/* import commands */ 
import mac from "./commands/cmd.mac";
import echo from "./commands/cmd.echo";
import ppoe from "./commands/cmd.ppoe";
import ping from "./commands/cmd.ping";
import help from "./commands/cmd.help";
import whois from "./commands/cmd.whois";
import cisco from "./commands/cmd.cisco";
import ipcalc from "./commands/cmd.ipcalc";
import portal from "./commands/cmd.portal";
import convite from "./commands/cmd.convite";
import traceroute from "./commands/cmd.traceroute";
/* import events */
import join from "./events/event.join";
import left from "./events/event.left";

// import express from "express";

// const app = express();

// app.get('/', (req, res) => { res.send("TELEGRAM STARTED"); });

// @channel -1001243970569
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

// app.listen(3333);