import bot from "./src/server";
/* import commands */ 
import echo from "./commands/cmd.echo";
import mac from "./commands/cmd.mac";
import ppoe from "./commands/cmd.ppoe";
import ping from "./commands/cmd.ping";
import portal from "./commands/cmd.portal";
/* import events */
import join from "./events/event.join";
import left from "./events/event.left";

// @channel -1001243970569
bot.onText(/\/echo (.+)/, echo);
bot.onText(/\/mac (.+)/, mac);
bot.onText(/\/ppoe (.+)/, ppoe);
bot.onText(/\/portal (.+)/, portal);
bot.onText(/\/ping (.+)/, ping);

// bot.on('message', async (msg) => {
//     const chatId = msg.chat.id
//     const userID = msg.from.id
//     const name = msg.from.username
// });

bot.on("new_chat_members", join);
bot.on("left_chat_member", left);
