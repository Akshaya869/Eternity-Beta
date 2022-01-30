module.exports = ({
name: "buy-platinum", 
code: `$setGlobalUserVar[Money;$sub[$getGlobalUserVar[Money;$authorID];$multi[20000;$message[1]]];$authorID]
$setGlobalUserVar[Platinum;$sum[$getGlobalUserVar[Platinum;$authorID];$message[1]];$authorID]
$onlyIf[$getGlobalUserVar[Money;$authorID]>=$multi[20000;$message[1]];You Need **⏣$numberSeparator[$multi[10000;$message[1]]]** in your Wallet]
$thumbnail[$authorAvatar]
$color[RANDOM]
$title[Purchase Successful]
$description[You Bought **$message[1] $customEmoji[gem]Platinum Lootbox** for **⏣$numberSeparator[$multi[20000;$message[1]]]**!]`
})