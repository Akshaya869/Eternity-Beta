module.exports = ({
    name: "mute",
    description: "Mutes a user for a period of time",
    category: "Moderation",
    usage: "e?mute <user> <time> <reason>",
    code: `
    $sendDM[$mentioned[1];{description:**Your mute time has finished in $serverName[$guildID]}{color:BLUE}**]
    $takeRoles[$mentioned[1];$getServerVar[mutedrole]]
    $wait[$message[2]]
    $channelSendMessage[$channelID;{title:Muted}{description:$customemoji[MutedXD]Muted <@$mentioned[1]> for $message[2]}{color:GREEN}]
    $giveRoles[$mentioned[1];$getServerVar[mutedrole]]
    $onlyIf[$noMentionMessage!=;> $getVar[no] **Please enter a valid time**]
    $onlyPerms[manageroles;> $getVar[no] **You need manage server permission**]
    $suppressErrors[**An error occured,you probably forgot to use \`e?setmute @role\` command,Set the mute role and try the Command Again**]
    `
    })