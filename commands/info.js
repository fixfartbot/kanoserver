const { DiscordAPIError } = require("discord.js")

module.exports = {
    name: 'info',
    description: 'info embed',
    execute(message, args, Discord){
        const newEmbed = new Discord.MessageEmbed()
        .setColor('#039dfc')
        .setTitle('Common Questions')
        .setDescription('These are commonly asked Questions')
        .addFields(
            {name: 'Question 1', value: 'Is albert here?'},
            {name: 'Answer 1', value: 'Albert is not currently in the sevrer'},
            {name: 'Question 2', value: 'Do I need to like albert to be here?'},
            {name: 'Answer 2', value: 'No!, We strive to be a community for all whether you watch albert or not'}
        )
        .setFooter('If you have any more questions, feel free to ask any online staff members!');

        message.channel.send(newEmbed)
    }

    
}