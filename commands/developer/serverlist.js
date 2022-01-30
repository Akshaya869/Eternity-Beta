module.exports = ({
 name: "serverlist",
 aliases: "sv",
 code: `
**$serverNames**
Done
$onlyIf[$authorID==$botOwnerID;$customEmoji[tf]]`
})