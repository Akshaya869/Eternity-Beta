module.exports = ({
name: "buy-silver", 
code: `$setGlobalUserVar[Money;$sub[$getGlobalUserVar[Money;$authorID];$multi[$message[1];5000];$authorID]
$setGlobalUserVar[Silver;$sum[$getGlobalUserVar[Silver;$authorID];$message[1]];$authorID]
$onlyIf[$getGlobalUserVar[Money;$authorID]>=5000;You Need ⏣$numberseparator[$multi[5000;$message[1]]] in your Wallet]
$thumbnail[$authorAvatar]
$color[RANDOM]
$title[Purchase Successful]
$description[You Bought a **$customEmoji[gem]Silver Lootbox** for **⏣$numberseparator[$multi[5000;$message[1]]]**!]
$argsCheck[1;**$getVar[no]Error,You must mention how much you want to buy!**]`
})