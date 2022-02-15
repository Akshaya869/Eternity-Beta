module.exports = ({
name: "buy-phone", 
code: `$setGlobalUserVar[Money;$sub[$getGlobalUserVar[Money;$authorID];$multi[2500;$message[1]]];$authorID]
$setGlobalUserVar[Phone;$sum[$getGlobalUserVar[Phone;$authorID];$message[1]];$authorID]
$onlyIf[$getGlobalUserVar[Money;$authorID]>=$multi[2500;$message[1]];You Need **⏣$numberSeparator[$multi[2500;$message[1]]]** in your Wallet]
$thumbnail[$authorAvatar]
$color[RANDOM]
$title[Purchase Successful]
$description[You Bought **$message[1] $customEmoji[Phone]Phones** for **⏣$numberSeparator[$multi[2500;$message[1]]]**!]
$argsCheck[1;**$getVar[no]Error,You must mention how much you want to buy!**]`
})