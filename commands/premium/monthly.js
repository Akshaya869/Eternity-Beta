module.exports = {
  name: "monthly",
  code: `
$title[Monthly Coins]
$description[Here's your Monthly Coins- **⏣10,000,000**]
$setGlobalUserVar[Money;$sum[$getGlobalUserVar[Money];10000000]]
$color[RANDOM]
$cooldown[30d;{title: Woah Dude Slow Down}{description: You would be able to use this command again in **%time%**.The Default Cooldown is **1 Month**}{color:RANDOM}]
$onlyIf[$getGlobalUserVar[premium;$authorID]==true;**:thinking:You don't have premium**]`
};
