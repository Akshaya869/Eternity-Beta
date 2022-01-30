module.exports = {
  name: "eat-cookie",
  code: `
  $setGlobalUserVar[Cookie;$sub[$getGlobalUserVar[Cookie;$authorID];1];$authorID]
  $description[You ate a 🍪**Cookie**! Now your Coin Multiplier is increased by **$random[10;50]%**]
  $onlyIf[$getGlobalUserVar[Cookie]>=1;:thinking:**You don't own this item?**]
  $color[RANDOM]`
}