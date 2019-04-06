const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get("562584649163997190")
setInterval(function() {
channel.send(`البرو بوت مش كثير صعب بس مشكلتو بدو كتابة كثير فا يب ._._._.__._. فر بحاول اني اجيب كمان كريديت عشان اشتري والخ..`);
}, 30)
})

client.login(process.env.BOT_TOKEN);
