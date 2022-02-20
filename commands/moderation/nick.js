module.exports = ({
    name:"nick",
    aliases:['set-nick','nickname'],
    category:"Moderation",
    code:`
    $channelsendmessage[$getservervar[bl];{author:A user's nickname was updated!:$authoravatar}{description:<@$authorid> updated <@$get[user]>'s nickname, to **$get[name]**!\n\n[Jump To Message](https://discord.com/channels/$guildid/$channelid/$messageid)}{color:RANDOM}{footer:$username[$clientid] bot-mod logs}{timestamp}{thumbnail:$useravatar[$get[user]]}]
    $changenickname[$get[user];$get[name]]
    $sendmessage[{author:Success!}{description:**$usertag[$get[user]]** was successfully renamed to **$get[name]**!}{color:GREEN}{footer:Action by $usertag}{timestamp};no]
    $onlybotperms[managenicknames;embedlinks;Permissions I require the given permissions for the execution of this command#COLON# \`Kick\`, \`Embed Links\`. Permissions not granted, execution cancelled.]
    $onlyif[$replacetext[$replacetext[$checkcondition[$authorid==$ownerid];true;1];false;$roleposition[$highestrole[$clientid]]]<$replacetext[$replacetext[$checkcondition[$authorid==$ownerid];true;2];false;$roleposition[$highestrole[$get[user]]]];{description:The user is **above/equal to me** in position of roles!}{color:FF0000}]
    $onlyif[$replacetext[$replacetext[$checkcondition[$authorid==$ownerid];true;1];false;$roleposition[$highestrole[$authorid]]]<$replacetext[$replacetext[$checkcondition[$authorid==$ownerid];true;2];false;$roleposition[$highestrole[$get[user]]]];{description:The user is **above/equal to you** in position of roles!}{color:FF0000}]
    $onlyif[$get[user]!=$ownerid;{description:Cannot change nickname of the owner!}{color:FF0000}]
    $onlyif[$memberexists[$get[user]]==true;{description:Member not found!}{color:FF0000}]
    $let[user;$findmember[$message[1];no]]
    $let[name;$messageslice[1]]
    $onlyif[$message[2]!=;{field:Invalid Arguments Used!:> \`\`\`fix
    > $getservervar[prefix]nick <userid/name/mention> <new name>\`\`\`}{color:FF0000}]
    $onlyperms[managenicknames;{description:Permissions required for execution of the command#COLON# \`Manage Nicknames\`. You do not have the necessary permissions!}{color:FF0000}]
    `
  })