const Discord = require("discord.js");
const bot = new Discord.Client();

var prefix = ("r!");

bot.on('ready', function() {
    bot.user.setActivity("Développement en cours.");
    console.log("Connecté");
});

bot.login(process.env.TOKEN);

bot.on("message", message => {
    switch (message.content) {
        case (prefix + "help"):
            message.channel.send("Bot en développement, merci de ne pas tenter de l'utiliser (tfaçon ça fera rien mdr)");
            break;
        case (prefix + "ping"):
            const m = await message.channel.send("Pong ! :ping_pong:");
            m.edit(`Le ping est de ** ${m.createdTimestamp - message.createdTimestamp}ms**. Le ping API est de **${Math.round(client.ping)}ms**`);
            break;
    };
            
});
