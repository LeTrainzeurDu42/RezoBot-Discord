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
        message.channel.send("**PONG !** :ping_pong:");
        message.channel.send("Mon ping est de **" + ping + "ms**.");
        break;
            
    case (prefix + "site"):
        message.channel.send("Voici le site Internet du Rézo Quotidien ! https://rezoquotidien.wordpress.com/");
        break;
            
    case (prefix + "pong"):
        var ping = new Date().getTime() - message.createdTimestamp;
        var reponse = function(ping) {
            message.channel.send("Bon, bah t'auras les infos cette fois-ci, mais la prochaine fois fais gaffe hein ! mon ping est de **" + ping + "ms**.");
        }
        message.channel.send("**PON...** Mais keske ?");
        setTimeOut(function() {message.channel.send("MAIS T'ES CON TOI ! LA COMMANDE C'EST `r!ping` PUTAIN !"); setTimeout(reponse(ping), 1500)}, 1500)
        break;
    }
});
