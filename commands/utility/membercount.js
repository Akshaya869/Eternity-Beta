module.exports = ({
    name: "membercount",
    aliases: ['memberscount','memcount'],
    usage: "",
    category: "Utility",
    code: `$color[RANDOM]
    $author[$serverName;$serverIcon]
    $description[**$membersCount[$guildID;all;yes]** members]
    $onlyIf[$checkContains[$channelType;text;news]==true;]`
})