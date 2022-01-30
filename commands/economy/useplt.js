module.exports = {
  name: "use-platinum",
  code: `
  $setGlobalUserVar[Platinum;$sub[$getGlobalUserVar[Platinum;$authorID];1];$authorID]
  $description[You opened a **$customEmoji[gem]Platinum Box** and got **⏣$random[30000;55000]**]
  $onlyIf[$getGlobalUserVar[Platinum]>=1;:thinking:**You don't own this item?**]
  $color[RANDOM]
  $setGlobalUserVar[Money;$sum[$getGlobalUserVar[Money];$random[30000;55000]]]`
}