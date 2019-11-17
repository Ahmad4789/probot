const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get("639157445586845697")
setInterval(function() {
channel.send(`لا تقرا وتوجع راسك نصيحة`);
}, 30)
})

client.login(process.env.BOT_TOKEN);
