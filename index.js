const Aoijs = require("aoi.js");

const bot = new Aoijs.Bot({
  mobile: false, // you can change it to "true" if you want a mobile status
  token: "OTM3MzMxMzYxMzA2NTI1NzQ2.YfaL2w.mqNLWO1tQGspC2ForXPlRWvzcVg", // change TOKEN with your bot token
  prefix: ["$getServerVar[prefix]", "<@!$clientID>", "<@$clientID>"]
});

bot.onMessage({
  guildOnly: false // commands will work in dms. set "true" for commands to work in guilds only
});

bot.status({
  text: `e+help | $serverCount Servers`, // put any text
  type: "LISTENING", // LISTENING, PLAYING, WATCHING, COMPETING
  status: "online", // online, dnd, idle, invisible
  time: 75 // amount of times where you can change the bot status (if have multiple statuses)
});

// FOR STREAMING STATUS USE THIS
// bot.status({
// text: "text",
// type: "STREAMING",
// url: "enter url/link"
//   })
// remove `//` in each side

bot.command({
  name: "lol",
  code: `$createSlashCommand[$guildID;inviteme;Invite Me]`
});
bot.interactionCommand({
  name: "inviteme",
  code: `$interactionReply[$getBotInvite]`
});

bot.onInteractionCreate();

bot.joinCommand({ 
        channel: "922112212263374938", 
        code: `**Hey <@$authorID>!, Welcome to $serverName! Please read the Rules in <#922112215644012605> and Enjoy**`
})
bot.onJoined()

bot.leaveCommand({ 
        channel: "922112213970452500", 
        code: `**Goodbye $username, hope you had a Good Stay at $serverName**`
})
bot.onLeave()

bot.command({
  name: "postmeme",
  aliases: ["pm","post"],
  code: `
  $awaitMessages[$authorID;30s;p,r,m;p,r,m;You run out of time picking, jeez]
  $reply[$messageID;
  {description:
  \`m\` ☐ Meme
  \`p\` ☐ Political Joke
  \`r\` ☐ Roast} {color:GOLD}
  ;no]
  $onlyIf[$getGlobalUserVar[Phone]>=1;:thinking:**You don't own a Phone! It's a requirement to use this Command**]
  $cooldown[1s;{description:A bit too fast there. Wait for **%time%**!}{color:GOLD}]
  `
 })
 
 bot.awaitedCommand({
  name:"p",
  code:`
  $title[$username GG! (Political Joke)]
  $description[$randomText[Omg! u got;Noice u got] 💰 $random[0;1000]. Nice joke meme !]
  $setGlobalUserVar[Money;$sum[$getGlobalUserVar[Money];$random[0;1000]]]
  `
 })
 bot.awaitedCommand({
  name:"r",
  code:`
  $title[$username GG! (Roast)]
  $description[$randomText[Omg! u got;Noice u got] 💰 $random[0;1050]. Nice Roast meme !]
  $setGlobalUserVar[Money;$sum[$getGlobalUserVar[Money];$random[0;1000]]]
  `
 })
 bot.awaitedCommand({
  name:"m",
  code:`
  $title[$username GG!]
  $description[$randomText[Omg! u got;Noice u got] 💰 $random[0;1100]. Nice meme u got thare !]
  $setGlobalUserVar[Money;$sum[$getGlobalUserVar[Money];$random[0;1000]]]
  `
 })

bot.variables({
  prefix: "e+",
  Money: "0",
  Bank: "0",
  Phone: "0",
  Cookie: "0",
  Pizza: "0",
  Bronze: "0",
  Platinum: "0",
  Gold: "0",
  Silver: "0",
  SpaceCoin: "0",
  SpaceTro: "0",
  premium: "false",
  antilink: "false",
  Utm: "0",
  guess_the_number_channel: "0",
  winning_number: "0",
  muted: "",
  Rob: "false",
  ccmd: "",
  cdes: "",
  giveawaychannelid: 0,
giveawayguildid: 0,
giveawayprize: "",
giveawaydescription: "",
giveawaytime: 0,
giveawayparticipants: "",
giveawayisfinished: "false",
giveawayisgiveaway: "false",
no: "<a:wrong:923190535978623046>",
});

bot.loadCommands("./commands/");
