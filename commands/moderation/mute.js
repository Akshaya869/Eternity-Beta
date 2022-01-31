module.exports = ({
name: "mute",
description: "Mutes a user for a period of time",
category: "Moderation",
usage: "e?mute <user>",
code: `
$giveRoles[Muted]
**Successfully Muted <@$mentioned[1]>
**Reason-** \`$noMentionMessage\`
$supressErrors[**$getVar[no]Error! Make sure Muted Role Exists**]
$onlyPerms[kick;ban;**$getVar[no]You don't have Enough Perms! (Required- Kick & Ban)**]
`
})