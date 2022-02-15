module.exports = ({
name: "buy-bronze", 
code: `$setGlobalUserVar[Money;$sub[$getGlobalUserVar[Money;$authorID];$multi[3000;$message[1]]];$authorID]
$setGlobalUserVar[Bronze;$sum[$getGlobalUserVar[Bronze;$authorID];$message[1]];$authorID]
$onlyIf[$getGlobalUserVar[Money;$authorID]>=$multi[3000;$message[1]];You Need ⏣$numberseparator[$multi[3000;$message[1]]] in your Wallet]
$thumbnail[$authorAvatar]
$color[RANDOM]
$title[Purchase Successful]
$description[You Bought **$message[1] $customEmoji[gem]Bronze Lootbox** for **⏣$numberseparator[$multi[3000;$message[1]]]**!]
$argsCheck[1;**$getVar[no]Error,You must mention how much you want to buy!**]`
})