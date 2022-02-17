module.exports = ({
    name: "setmute",
    description: "Set the mute role of your server",
    category: "Moderation",
    usage: "e?setmute @role",
    code:`$setServerVar[mutedrole;$mentionedRoles[1]]
    $description[**$getVar[yes]Successfully set muted role to <@&$mentionedRoles[1]>**]`
    })