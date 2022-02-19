module.exports = {
    name: "warn",
    code: `
    $title[Moderation | Warns]
$footer[System32(cow) do it L]
$description[You warned <@​$findUser[$message[1];no]> for$replaceText[$message;$message[1];] using the id #$getServerVar[warn]]
$color[GREEN]
$djsEval[const nodejsondb = require("node-json-db").JsonDB;

var db = new nodejsondb("warns", true, true, '/');

db.push("/$findUser[$message[1];no]/$getServerVar[warn]", {"reason":"$replaceText[$message;$message[1];]","mod":"$username", "id":"$getServerVar[warn]"});]
$setServerVar[warn;$sum[$getServerVar[warn];1]]
$onlyIf[$findUser[$message[1];no]!=undefined;User not found]
$argsCheck[>2;Args missing]`
}