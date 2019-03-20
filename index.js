/*

   _____ __________.___   _____       ______________________   _____      _____                       
  /  _  \\______   \   | /  _  \      \__    ___/\_   _____/  /  _  \    /     \                      
 /  /_\  \|       _/   |/  /_\  \       |    |    |    __)_  /  /_\  \  /  \ /  \                     
/    |    \    |   \   /    |    \      |    |    |        \/    |    \/    Y    \                    
\____|__  /____|_  /___\____|__  /      |____|   /_______  /\____|__  /\____|__  /                    
        \/       \/            \/                        \/         \/         \/                     
                                                                                                      
                                                                                                      
                                                                                                      
                                                                                                      
                                                                                                                                                                                                          
________  .___  __________________  ________ __________________       ________  _______________   ____
\______ \ |   |/   _____/\_   ___ \ \_____  \\______   \______ \      \______ \ \_   _____/\   \ /   /
 |    |  \|   |\_____  \ /    \  \/  /   |   \|       _/|    |  \      |    |  \ |    __)_  \   Y   / 
 |    `   \   |/        \\     \____/    |    \    |   \|    `   \     |    `   \|        \  \     /  
/_______  /___/_______  / \______  /\_______  /____|_  /_______  /    /_______  /_______  /   \___/   
        \/            \/         \/         \/       \/        \/             \/        \/            

	-> Founder: JblusDev & SmoilDev
	-> Discord: Soon
	-> Website: Soon
	-> Team: Aria
	-> Goal: CyberSecurity and development of site, software, application and other


*/

const Discord = require('discord.js');
const client = new Discord.Client();
var prefix = ".";

client.login('token');

client.on("ready", () => {
	console.log("[AriaTeam] > Le bot est bien activer !")
	client.user.setGame("Join & Quit > DiscordBot")
});

/* Join */
client.on('guildMemberAdd', member =>{
    let embed = new Discord.RichEmbed()
        .setDescription(':tada: **' + member.user.username + '** a rejoint ' + member.guild.name)
        .setFooter('Nous sommes désormais ' + member.guild.memberCount)
    member.guild.channels.get('ChannelJoinId').send(embed)
});

/* Quit */
client.on('guildMemberRemove', member =>{
    let embed = new Discord.RichEmbed()
        .setDescription(':cry: **' + member.user.username + '** a quitté ' + member.guild.name)
        .setFooter('Nous sommes désormais ' + member.guild.memberCount)
    member.guild.channels.get('ChannelQuitId').send(embed)
 
});
