module.exports = {
    name: "unwarn",
    aliases: "removewarn",
    code: `
    $title[Removed Warning]
    $description[$getVar[yes] Successfully Removed \`1 Warning\` from $username[$mentioned[1]]]
    $setUserVar[warns;$sub[$getUserVar[warns;$mentioned[1]];1];$mentioned[1]]
    $onlyIf[$getUserVar[warns;$mentioned[1]]>0;**$getVar[no] This user has no Warnings!**]
    $onlyPerms[kick;ban;**$getVar[no] You don't have Enough Perms to use this Command**]
    `
}