const Discord = require("discord.js");
const bot = new Discord.Client();
const commandes = require("commandes");

var prefix = ("r!");

bot.on('ready', function () {
    bot.user.setActivity("Développement en cours.");
    console.log("Connecté");
});

bot.login(process.env.TOKEN);


bot.on("message", message => {
    switch (message.content) {
    case (prefix + "help"):
        message.channel.send(aide);
        break;
    case (prefix + "ping"):
        var ping = new Date().getTime() - message.createdTimestamp;
        commandes.ping(ping);
        break;
    case (prefix + "site"):
        message.channel.send("Voici le site Internet du Rézo Quotidien ! https://rezoquotidien.wordpress.com/");
        break;
    case (prefix + "pong"):
        var ping = new Date().getTime() - message.createdTimestamp;
        commandes.pong(ping);
    }
});
