module.exports = {
    name: 'clear',
    description: 'This command will be used to clear messages',
    async execute(message, args){
        if(message.member.roles.cache.has('766304776236302377')){
        if(!args[0]) return message.Reply("Please enter the amount of messages that you want to be cleared");
        if(isNaN(args[0])) return message.reply("Please enter a number!");

        if(args[0] > 100) return message.channel.send("You cant delete more than 100 messages in one command");
        if(args[0] < 1) return message.channel.send("You must delete more then 0 messages");
        
        await message.channel.messages.fetch({ limit: args[0]}).then(messages =>{
            message.channel.bulkDelete(messages)
        })} else {
            message.channel.send('You do not have permissions to use this command!')
        }
        
    }


}