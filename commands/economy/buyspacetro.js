module.exports = ({
name: "buy-spacetrophy",
aliases: ['buy-trophy','buy-spacetro'],
code: `$setGlobalUserVar[Money;$sub[$getGlobalUserVar[Money;$authorID];$multi[50000000;$message[1]]];$authorID]
$setGlobalUserVar[SpaceTro;$sum[$getGlobalUserVar[SpaceTro;$authorID];$message[1]];$authorID]
$onlyIf[$getGlobalUserVar[Money;$authorID]>=$multi[50000000;$message[1]];You Need **⏣$numberseparator[$multi[50000000;$message[1]]]** in your Wallet]
$thumbnail[$authorAvatar]
$color[RANDOM]
$title[Purchase Successful]
$description[You Bought **$message[1] $customEmoji[SpTro]Space Trophy** for **⏣$numberseparator[$multi[50000000;$message[1]]]**!]`
})