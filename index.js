const Discord = require('discord.js');
const client = new Discord.Client();
var prefix = ".";

client.login('NTU3OTA3MTc1NTQxMDQ3Mjk2.D3PH3Q.uzKtQ1v4a4NBs48A1uuKhQYjshs');

client.on("ready", () => {
	console.log("[AriaTeam] > Le bot est bien activer !")
	client.user.setGame("Join & Quit > DiscordBot")
});

/* JOin */
client.on('guildMemberAdd', member =>{
    let embed = new Discord.RichEmbed()
        .setDescription(':tada: **' + member.user.username + '** a rejoint ' + member.guild.name)
        .setFooter('Nous sommes désormais ' + member.guild.memberCount)
    member.guild.channels.get('557907866888175616').send(embed)
});

/* Quit */
client.on('guildMemberRemove', member =>{
    let embed = new Discord.RichEmbed()
        .setDescription(':cry: **' + member.user.username + '** a quitté ' + member.guild.name)
        .setFooter('Nous sommes désormais ' + member.guild.memberCount)
    member.guild.channels.get('557907926266937374').send(embed)
 
});