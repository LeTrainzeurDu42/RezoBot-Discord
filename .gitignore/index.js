const Discord = require("discord.js");
const bot = new Discord.Client();

var prefix = ("r!");

bot.on('ready', function () {
    bot.user.setActivity("Développement en cours.");
    console.log("Connecté");
});

bot.login(process.env.TOKEN);


bot.on("message", message => {
    if (message.channel === "472732873179267082") {
        if (message.author.bot === false) { 
            message.channel.send("Ui");
        } 
    } else {
        switch (message.content) {
        case (prefix + "help"):
            message.channel.send(aide);
            break;
        case (prefix + "ping"):
            var ping = new Date().getTime() - message.createdTimestamp;
            message.channel.send("Mon ping est de **" + ping + "ms**.");
            break;
        
        }
    
    }
      
});
