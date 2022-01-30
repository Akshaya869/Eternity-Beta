module.exports = ({
name: "setprefix",
description: "Sets the Server Prefix",
category: "Utility",
usage: "prefix <your prefix>",
aliases: ['changeprefix', 'prefix'],
code: `$description[$customEmoji[correct]**Done, my new prefix is** \`$message\`]
$color[RANDOM]
$setServerVar[prefix;$message]
$onlyIf[$message[1]!=;**You have to put a prefix, example** \`$getServerVar[prefix]setprefix /\`]
$onlyPerms[admin;$customEmoji[wrong] **You dont have** \`ADMIN\` **perms**]`
})