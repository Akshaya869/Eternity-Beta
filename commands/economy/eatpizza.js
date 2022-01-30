module.exports = {
  name: "eat-pizza",
  code: `
  **You ate a 🍕Pizza and you got Nothing (Scammed Lmao)**
  $setGlobalUserVar[Pizza;$sub[$getGlobalUserVar[Pizza;$authorID];1];$authorID]
  $onlyIf[$getGlobalUserVar[Pizza]>=1;:thinking:**You don't own this item?**]
  `
}