const Discord = require("discord.js");
const bot = new Discord.Client();

var prefix = ("r!");

bot.on('ready', function () {
    bot.user.setActivity("Développement en cours.");
    console.log("Connecté");
});

bot.login(process.env.TOKEN);

var aide = "Je suis en développement, donc inutile d'essayer de m'utiliser :D";

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
        message.channel.send("**PON...** Keske");
        setTimeout(message.channel.send("MAIS T'ES CON OU QUOI ??? LA COMMANDE C'EST `" + prefix + "ping` BORDEL !!"), 1500);
        setTimeout(message.channel.send("Bon, ca ira pour cette fois... Mon ping est de **" + ping + "ms**. Mais attention la prochaine fois hein :unamused:"), 3000)
        break;
    }
});
