import bot from "./src/server";
/* import commands */ 
import mac from "./commands/cmd.mac";
import echo from "./commands/cmd.echo";
import ppoe from "./commands/cmd.ppoe";
import ping from "./commands/cmd.ping";
import help from "./commands/cmd.help";
import portal from "./commands/cmd.portal";
import convite from "./commands/cmd.convite";
/* import events */
import join from "./events/event.join";
import left from "./events/event.left";

// @channel -1001243970569
bot.onText(/\/mac (.+)/, mac);
bot.onText(/\/echo (.+)/, echo);
bot.onText(/\/ppoe (.+)/, ppoe);
bot.onText(/\/ping (.+)/, ping);
bot.onText(/\/portal (.+)/, portal);
bot.onText(/\/help/, help);
bot.onText(/\/convite/, convite);

// bot.on('message', async (msg) => {
//     const chatId = msg.chat.id
//     const userID = msg.from.id
//     const name = msg.from.username
// });

bot.on("new_chat_members", join);
bot.on("left_chat_member", left);
