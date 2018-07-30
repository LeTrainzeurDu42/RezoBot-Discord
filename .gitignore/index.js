const Discord = require("discord.js");
const bot = new Discord.Client();

var prefix = ("r!");

bot.on('ready', function () {
    bot.user.setActivity("BETA 0.3.1 - EN DEV");
    console.log("Connecté");
});

bot.login(process.env.TOKEN);

var aide = "Merci de ne pas utiliser le bot pour le moment.";


bot.on("message", message =>
    if (message.content.startsWith(prefix)) {
        const args = message.content.slice(prefix.length).trim().split(/ +/g);
        const command = args.shift().toLowerCase();
        switch (command) {
            case "ping":
                var ping = new Date().getTime() - message.createdTimestamp;
                message.channel.send("**PONG !** :ping_pong:");
                message.channel.send("Mon ping est de **" + ping + "ms**.");
                break;
                
            case "help":
                message.channel.send(aide);
                break;
            
            case "site":
                message.channel.send("Voici le site Internet du Rézo Quotidien ! https://rezoquotidien.wordpress.com/");
                break;
                
            case "pong":
                var ping = new Date().getTime() - message.createdTimestamp;
                message.channel.send("**PON...** Keske");
                message.channel.send("MAIS T'ES CON OU QUOI ??? LA COMMANDE C'EST `" + prefix + "ping` BORDEL !!");
                message.channel.send("Bon, ca ira pour cette fois... Mon ping est de **" + ping + "ms**. Mais attention la prochaine fois hein :unamused:");
                break;
                
            case "aide":
                if (args[0] === undefined) {
                    let membreAide = message.member;
                    let roleAide = message.guild.roles.get("465803768307515392");
                    if (membreAide.roles.has(roleAide.id)) {
                        message.reply("tu as déjà demandé de l'aide ! Attends un peu !");
                    } else {
                        message.reply("un membre du <@&463112847468265512> a été prévenu, il sera à vous d'ici peu ! Rendez-vous dans le chat <#463112133849120771> :smile:");
                        membreAide.addRole(roleAide);
                    }
                } else {
                    let membreAide = message.mentions.members.first();
                    if (membreAide === undefined) {
                        message.reply("merci de mentionner un membre valide !");
                    } else if (message.author.permission.has(MANAGE_ROLES) === false) {
                        message.channel.send("Non.");
                    } else {
                        let roleAide = message.guild.roles.get("465803768307515392");
                        if (membreAide.roles.has(roleAide.id)) {
                            membreAide.removeRole(roleAide);
                            message.channel.send("Succès !");
                        } else {
                            message.reply("ce membre n'a pas le rôle *A besoin d'aide*...");
                        }
                    }
                }
            
        }
    }
});

bot.on('guildMemberAdd', member => {
    member.createDM().then(channel => {
        return channel.send("Bienvenue à toi sur le serveur du Rézo Quotidien ! Le staff t'invite à aller consulter le règlement et à le valider afin de recevoir ton grade de membre. Passe un bon moment sur le serveur !")
    }).catch(console.error)
})
