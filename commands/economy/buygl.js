module.exports = ({
name: "buy-gold", 
code: `$setGlobalUserVar[Money;$sub[$getGlobalUserVar[Money;$authorID];$multi[10000;$message[1]]];$authorID]
$setGlobalUserVar[Gold;$sum[$getGlobalUserVar[Gold;$authorID];$message[1]];$authorID]
$onlyIf[$getGlobalUserVar[Money;$authorID]>=$multi[10000;$message[1]];You Need ⏣$numberSeparator[$multi[10000;$message[1]]] in your Wallet]
$thumbnail[$authorAvatar]
$color[RANDOM]
$title[Purchase Successful]
$description[You Bought **$message[1] $customEmoji[gem]Gold Lootbox** for **⏣$numberSeparator[$multi[10000;$message[1]]]**!]
$argsCheck[1;**$getVar[no]Error,You must mention how much you want to buy!**]`
})