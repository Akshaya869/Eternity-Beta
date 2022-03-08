const Aoijs = require("aoi.js");

const bot = new Aoijs.Bot({
  mobile: false, // you can change it to "true" if you want a mobile status
  token: process.env.TOKEN, // change TOKEN with your bot token
  prefix: ["$getServerVar[prefix]", "<@!$clientID>", "<@$clientID>"]
});

bot.onMessage({
  guildOnly: false // commands will work in dms. set "true" for commands to work in guilds only
});

bot.status({
  text: `e?help | $serverCount Servers`, // put any text
  type: "LISTENING", // LISTENING, PLAYING, WATCHING, COMPETING
  status: "online", // online, dnd, idle, invisible
  time: 75 // amount of times where you can change the bot status (if have multiple statuses)
});

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
  $description[$randomText[Omg! u got;Noice u got] 💰 $random[0;1000]. Your fan following is increased by **$random[10;60]%** !]
  $setGlobalUserVar[Money;$sum[$getGlobalUserVar[Money];$random[0;1000]]]
  `
 })
 bot.awaitedCommand({
  name:"r",
  code:`
  $title[$username GG! (Roast)]
  $description[$randomText[Omg! u got;Noice u got] 💰 $random[0;1050]. Roasted! 🔥 !]
  $setGlobalUserVar[Money;$sum[$getGlobalUserVar[Money];$random[0;1000]]]
  `
 })
 bot.awaitedCommand({
  name:"m",
  code:`
  $title[$username GG!]
  $description[$randomText[Omg! u got;Noice u got] 💰 $random[0;1100]. Nice meme $username !]
  $setGlobalUserVar[Money;$sum[$getGlobalUserVar[Money];$random[0;1000]]]
  `
 })
 
 bot.deletedCommand({
  channel:"$channelID",
  code:`$settimeout[1h;
  guild: $guildid] $djseval[//This is needed because it is against ToS to store the snipe data forever. Thats why I kept a timeout to remove it after an hour]
  $setServerVar[snipe_messages;&&&&$replacetext[$message;&&&&;&&&]$getServerVar[snipe_messages]]
  $setServerVar[snipe_author;&&&&$authorid$getServerVar[snipe_author]]
  $setServerVar[snipe_datestamp;&&&&$advancedtextsplit[$divide[$datestamp;1000];.;1]$getServerVar[snipe_datestamp]]`})
  bot.onMessageDelete()

  bot.timeoutCommand({
  channel:"",
  code:`$setservervar[snipe_datestamp;$joinsplittext[&&&&];$get[guildid]]
  $removetextsplitelement[$gettextsplitlength]
  $textsplit[$getservervar[snipe_datestamp;$get[guildid]];&&&&]
  $setservervar[snipe_author;$joinsplittext[&&&&];$get[guildid]]
  $removetextsplitelement[$gettextsplitlength]
  $textsplit[$getservervar[snipe_author;$get[guildid]];&&&&]
  $setservervar[snipe_messages;$joinsplittext[&&&&];$get[guildid]]
  $removetextsplitelement[$gettextsplitlength]
  $textsplit[$getservervar[snipe_messages;$get[guildid]];&&&&]
  $let[guildid;$timeoutdata[guild]]`})

  bot.joinCommand({ //command
    channel: "$getServerVar[wlcChannel]", //channel where it will log
    code: `**Hey <@$username>,Welcome to $serverName,Hope you have a Great Time Here!**
    $onlyIf[$getServerVar[wlcToggle]==true;]` //Message sent to <channel>
    })

 bot.onJoined()

bot.variables({
  prefix: "e?",
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
  mutedrole: "",
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
yes: "<a:correct:923190540672049154>",
bot: "false",
lock: "false",
snipe_messages:"",
snipe_author:"",
snipe_datestamp:"",
mutedrole: "",
warns: "0",
AFK: "off",
time: "",
wlcChannel: "",
wlcToggle: "False",
});

bot.loadCommands("./commands/");
