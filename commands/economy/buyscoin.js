module.exports = ({
name: "buy-spacecoin",
aliases: ['buy-coin','buy-space'],
code: `$setGlobalUserVar[Money;$sub[$getGlobalUserVar[Money;$authorID];$multi[1000000;$message[1]]];$authorID]
$setGlobalUserVar[SpaceCoin;$sum[$getGlobalUserVar[SpaceCoin;$authorID];$message[1]];$authorID]
$onlyIf[$getGlobalUserVar[Money;$authorID]>=$multi[1000000;$message[1]];You Need **⏣$numberseparator[$multi[1000000;$message[1]]]** in your Wallet]
$thumbnail[$authorAvatar]
$color[RANDOM]
$title[Purchase Successful]
$description[You Bought **$message[1] $customEmoji[sc]Space Coin** for **⏣$numberseparator[$multi[1000000;$message[1]]]**!]
$argsCheck[1;**$getVar[no]Error,You must mention how much you want to buy!**]`
})