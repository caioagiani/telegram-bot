const bot = require("./src/server");
/* import commands */ 
const echo = require("./commands/cmd.echo");
const ppoe = require("./commands/cmd.ppoe");
const mac = require("./commands/cmd.mac");
const ping = require("./commands/cmd.ping");
const portal = require("./commands/cmd.portal");
/* import events */
const join = require("./events/event.join");
const left = require("./events/event.left");

// @channel -1001243970569
bot.onText(/\/echo (.+)/, echo);
bot.onText(/\/mac (.+)/, mac);
bot.onText(/\/ppoe (.+)/, ppoe);
bot.onText(/\/portal (.+)/, portal);
bot.onText(/\/ping (.+)/, ping);

bot.on("new_chat_members", join);
bot.on("left_chat_member", left);
