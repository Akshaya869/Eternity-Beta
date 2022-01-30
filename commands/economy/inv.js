module.exports = {
  name: "inventory",
  aliases: "inv",
  code: `
  $title[$username's Inventory]
  $description[$addField[**Rare Items**; **$customemoji[sc]Space Coin: $getGlobalUserVar[SpaceCoin]
  $customemoji[SpTro]Space Trophy: $getGlobalUserVar[SpaceTro]**]
  $color[RANDOM]
  
  $addField[**Lootboxes**; **$customemoji[gem]Bronze Box: $getGlobalUserVar[Bronze]
  $customemoji[gem]Silver Box: $getGlobalUserVar[Silver]
  $customemoji[gem]Gold Box: $getGlobalUserVar[Gold]
  $customemoji[gem]Platinum Box: $getGlobalUserVar[Platinum]
  $customemoji[chestlol]Ultimate Box: $getGlobalUserVar[Utm]**]
  
  $addField[**Utility Items**;
    **$customEmoji[Phone]Phone: $getGlobalUserVar[Phone]
      🍪Cookie: $getGlobalUserVar[Cookie]
      🍕Pizza: $getGlobalUserVar[Pizza]**]`
}