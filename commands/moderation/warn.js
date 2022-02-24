module.exports = {
    name: "warn",
    code: `
    $title[$username[$mentioned[1]] was Warned]
    $description[
    **User-** <@$mentioned[1]>

    **Moderator-** <@$authorID>

    **Reason-** \`$noMentionMessage\`]

    $setUserVar[warns;$sum[$getUserVar[warns;$mentioned[1]];1];$mentioned[1]]
    $onlyPerms[kick;ban;**$getVar[no] You don't have Enough Perms to use this Command**]
    $color[GREEN]
    `
}