const Discord = require("discord.js");
const bot = new Discord.Client();

var prefix = ("r!");

bot.on('ready', function() {
    bot.user.setActivity("Développement en cours.");
    console.log("Connecté");
});

bot.login(process.env.TOKEN);

bot.on("message", message => {
    if (message.content === prefix + "help") {
        message.channel.send("Bot en développement, merci de ne pas tenter de l'utiliser (tfaçon ça fera rien mdr)");
    }
});
