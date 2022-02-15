module.exports = ({
name: "buy-cookie", 
code: `$setGlobalUserVar[Money;$sub[$getGlobalUserVar[Money;$authorID];$multi[20;$message[1]]];$authorID]
$setGlobalUserVar[Cookie;$sum[$getGlobalUserVar[Cookie;$authorID];$message[1]];$authorID]
$onlyIf[$getGlobalUserVar[Money;$authorID]>=$multi[20;$message[1]];You Need ⏣$numberseparator[$multi[20;$message[1]]] in your Wallet]
$thumbnail[$authorAvatar]
$color[RANDOM]
$title[Purchase Successful]
$description[You Bought $message[1] 🍪Cookie for **⏣$numberseparator[$multi[20;$message[1]]]**!]
$argsCheck[1;**$getVar[no]Error,You must mention how much you want to buy!**]`
})