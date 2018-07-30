const Discord = require("discord.js");
const bot = new Discord.Client();

var prefix = ("r!");
var version = "BETA 0.3.4";

bot.on('ready', function () {
    bot.user.setActivity(version + " - EN DEV");
    console.log("Connecté");
});

bot.login(process.env.TOKEN);

bot.on("message", message => {
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
                if (args[0] === undefined) {
                    const aideGenerale = new Discord.RichEmbed()
                        .setTitle("Liste des commandes disponibles")
                        .setAuthor("RézoBot", "https://cdn.discordapp.com/attachments/463113451049582592/464124810688069655/PicsArt_07-04-07.46.57.jpg")
                        .setColor("#8080FF")
                        .setDescription("Pour plus d'infos sur les commandes, faites `r!help` + le nom de la commande :smile: Exemple : `r!help ping`")
                        .setFooter("Version " + version, "https://cdn.discordapp.com/attachments/463113451049582592/464124810688069655/PicsArt_07-04-07.46.57.jpg")
                        .setTimestamp()
                        .addField("Commandes utiles à la maintenance du bot", "`ping`, `pong`, `help`")
                        .addField("Commandes en cas de souci", "`aide`")
                        .addField("Commandes pour le Rézo Quotidien", "`site`")
                        .addField("D'autres commandes arrivent prochainement !", "Le bot est encore en version BETA :wink:");
                    message.channel.send(aideGenerale)
                } else {
                    switch (args[0]) {
                        case "help":
                            const aideHelp = new Discord.RichEmbed()
                                .setTitle("Aide pour la commande `help`")
                                .setDescription("Les [] ne sont pas à ajouter.")
                                .addField("Pour afficher la liste des commandes :", "`help`")
                                .addField("Pour afficher l'aide propre à une commande :", "`help` [commande]");
                            message.channel.send(aideHelp)
                            break;
                        case "ping":
                            const aidePing = new Discord.RichEmbed()
                                .setTitle("Aide pour la commande `ping`")
                                .setDescription("Les [] ne sont pas à ajouter.")
                                .addField("Pour afficher le ping du bot :", "`ping`");
                            message.channel.send(aidePing)
                            break;
                        case "aide":
                            if (message.member.hasPermission("MANAGE_ROLES") === true) {
                                const aideAideAdmin = new Discord.RichEmbed()
                                    .setTitle("Aide pour la commande `ping`")
                                    .setDescription("Les [] ne sont pas à ajouter. Certaines de ces commandes sont réservées aux admins.")
                                    .addField("En cas de problème : ", "`aide`")
                                    .addField("Pour supprimer le rôle *A besoin d'aide* à un membre :", "`aide` [mention du membre]");
                                message.channel.send(aideAideAdmin)
                            } else {
                                const aideAide = new Discord.RichEmbed()
                                    .setTitle("Aide pour la commande `ping`")
                                    .setDescription("Les [] ne sont pas à ajouter.")
                                    .addField("En cas de problème : ", "`aide`");
                                message.channel.send(aideAide)
                            }
                            break;
                        case "site":
                            const aideSite = new Discord.RichEmbed()
                                .setTitle("Aide pour la commande `site`")
                                .setDescription("Les [] ne sont pas à ajouter.")
                                .addField("Pour afficher l'URL du site Internet du Rézo Quotidien : ", "`aide`");
                            message.channel.send(aideSite)
                            break;
                    }
                }
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
                    } else if (message.member.hasPermission("MANAGE_ROLES") === false) {
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
});
