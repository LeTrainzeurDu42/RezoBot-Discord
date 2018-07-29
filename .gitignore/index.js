const Discord = require("discord.js");
const bot = new Discord.Client();

var prefix = ("r!");

bot.on('ready', function () {
    bot.user.setActivity("BETA 0.2.5 - EN DEV");
    console.log("Connecté");
});

bot.login(process.env.TOKEN);

var aide = "Merci de ne pas utiliser le bot pour le moment.";


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
            
       
    case (prefix + "aide"):
        let membreAide = message.member
        let roleAide = message.guild.roles.find("id", "472802977661452292")
        if (membreAide.roles.has(roleAide)) {
            message.reply("Tu as déjà demandé de l'aide ! Attends un peu !");
        } else {
            message.reply("Un @Staff a été prévenu, il sera à vous d'ici peu ! Rendez-vous dans le chat <#463112133849120771> :smile:");
            membreAide.addRole(roleAide.id);
        }
        break;
    
    //case (prefix + "delrole aide"):
        //role.id("472802977661452292").members.removeRole("472802977661452292");
        //message.channel.send("Succès !");
       // break;
    }
});

bot.on('guildMemberAdd', member => {
    member.createDM().then(channel => {
        return channel.send("Bienvenue à toi sur le serveur du Rézo Quotidien ! Le staff t'invite à aller consulter le règlement et à le valider afin de recevoir ton grade de membre. Passe un bon moment sur le serveur !")
    }).catch(console.error)
})
