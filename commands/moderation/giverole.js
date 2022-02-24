module.exports = ({
name: "giverole",
code: `$color[RANDOM]
$giveRoles[$mentioned[1];$mentionedRoles[1]]
$title[Role given to $username[$mentioned[1;yes]]#$discriminator[$mentioned[1;yes]]]
$description[**$username** has given <@&$mentionedRoles[1]> **role to** $username[$mentioned[1;yes]]]                           
$onlyIf[$mentionedRoles[1]!=;$getVar[no] **Mention a role**]
$onlyIf[$mentioned[1]!=;**$getVar[no] You must mention someone**]
$onlyBotPerms[manageroles;$getVar[no] **I don't have** \`MANAGAGE_ROLES\` perms]
$onlyPerms[manageroles;$GetVar[no] **You don't have** \`MANAGAGE_ROLES\` perms]`
})