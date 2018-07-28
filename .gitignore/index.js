const Discord = require("discord.js");
const bot = new Discord.Client();

var prefix = ("r!");

bot.on('ready', function () {
    bot.user.setActivity("Développement en cours.");
    console.log("Connecté");
});

bot.login(process.env.TOKEN);

var aide = "Je suis en développement, donc inutile d'essayer de m'utiliser :smile:";


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
        message.channel.send("MAIS T'ES CON OU QUOI ??? LA COMMANDE C'EST `" + prefix + "ping` BORDEL !!");
        message.channel.send("Bon, ca ira pour cette fois... Mon ping est de **" + ping + "ms**. Mais attention la prochaine fois hein :unamused:");
        break;
            
       
    //case (prefix + "aide"):
        //message.channel.send("<@" + message.author.id + ">, un @Staff a été prévenu, il sera à vous d'ici peu ! Rendez-vous dans le chat <#463112133849120771> :smile:");
        //message.author.addRole("472802977661452292");
        //break;
    
    //case (prefix + "delrole aide"):
        //role.id("472802977661452292").members.removeRole("472802977661452292");
        //message.channel.send("Succès !");
       // break;
    }
});

bot.on("guildMemberAdd", member => {
    member.createDM().then(channel => {
        return channel.send("Bienvenue à toi <@" + member.id + "> ! Le staff t'invite à aller consulter le règlement et à le valider afin de recevoir ton grade de membre. Passe un bon moment sur le serveur !")
    }).catch(const welcomechannel = member.guild.channels.find('id', '444826960120512513') // ID de notre channel
    var bienvenue = "Bienvenue à toi <@" + member.id + "> ! Le staff t'invite à aller consulter le #règlement et à le valider afin de recevoir ton grade de membre. Passe un bon moment sur le serveur !";
    return bienvenue;)
});
