module.exports = ({
name: "buy-pizza", 
code: `$setGlobalUserVar[Money;$sub[$getGlobalUserVar[Money;$authorID];$multi[200;$message[1]]];$authorID]
$setGlobalUserVar[Pizza;$sum[$getGlobalUserVar[Pizza;$authorID];$message[1]];$authorID]
$onlyIf[$getGlobalUserVar[Money;$authorID]>=$multi[200;$message[1]];You Need **⏣$numberSeparator[$multi[200;$message[1]]]** in your Wallet]
$thumbnail[$authorAvatar]
$color[RANDOM]
$title[Purchase Successful]
$description[You Bought $message[1] 🍕Pizzas for **⏣$numberSeparator[$multi[200;$message[1]]]**!]`
})