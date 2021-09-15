const Discord = require('discord.js');

const client = new Discord.Client();

const prefix = ',';

const fs = require('fs');

client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
for(const file of commandFiles){
    const command = require(`./commands/${file}`);

    client.commands.set(command.name, command)
}

client.once('ready', () => {
    console.log('Bot Online')
});

client.on('message', message =>{
    if(!message.content.startsWith(prefix) || message.author.bot ) return;

    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();

    if(command === 'ping'){
        client.commands.get('ping').execute(message, args, Discord);
    
    } else if (command == 'info'){
        client.commands.get('info').execute(message, args, Discord);

    } else if (command == 'clear'){
        client.commands.get('clear').execute(message, args, Discord);
    
    } else if (command == 'clear'){
        client.commands.get('kick').execute(message, args, Discord)
    }
    

});



//keep this line at bottom
client.login('Njc4Njk3NTM5MzQzNzQ1MDI0.XkmkVg.SaT_xoR1RPc9uzQxA994EY44EbY')
