module.exports = {
  name: "use-phone",
  code: `
  $title[$username Used their Phone]
  $description[**You used your phone and $randomText[Fainted;Watched Amogus;Listened to Music;Talked to Eternity's Developers;Worked] and got ⏣$random[100;4000]**]
  $color[RANDOM]
  $setGlobalUserVar[Money;$sum[$getGlobalUserVar[Money];$random[100;4000]]]
  $onlyIf[$getGlobalUserVar[Phone]>=1;:thinking:**You don't own this item?**]
  `
}