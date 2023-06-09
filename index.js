const Discord = require('discord.js-selfbot-v13');
const client = new Discord.Client({ checkUpdate: false });
const config = require('./config.json')

client.on('ready', async () => {
    console.log(`${client.user.tag} is ready!`)

    var RPC = new Discord.RichPresence()
        .setApplicationId('CLIENTID')
        .setType('PLAYING') // WATCHING, PLAYING, LISTENING
        .setState('😹')
        .setName('Nats1337')
        .setDetails('🐵🍌')
        .setAssetsLargeImage('') //discord image link example: https://cdn.discordapp.com/attachments/997862085172133949/1109235723791507527/ezgif-2-c427062ed3.png
        .setAssetsLargeText('')
        .setAssetsSmallImage('') //discord image link
        .setAssetsSmallText('')
        .addButton('Github', 'https://github.com/Natslol')
        .addButton('Youtube Channel', 'https://www.youtube.com/@kiraisthebest69');
        // .setURL('https://github.com/Natslol') if STREAMING
    client.user.setActivity(RPC);
})

client.login(config.token)
