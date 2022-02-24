module.exports = {
    name: "warnings",
    aliases: "warns",
    code: `
    $description[$username[$mentioned[1]] has total \`$getUserVar[warns;$mentioned[1]]\` **Warnings**]
    $onlyPerms[kick;ban;**$getVar[no] You don't have Enough Perms to use this Command**]
    $color[00FFFF]
    `
}