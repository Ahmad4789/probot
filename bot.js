const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get("562584649163997190")
setInterval(function() {
channel.send(`سبام كريديت احم مدري تجربة اولى xd allo alslam 3likm hello`);
}, 30)
})

client.login(process.env.BOT_TOKEN);