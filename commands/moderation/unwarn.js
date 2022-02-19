module.exports = {
    name: "unwarn",
    code: `
    $sendMessage[{title: Moderation | Unwarn}{description:You just removed the warns from <@​$mentioned[1]>}{color:GREEN};no]

$djsEval[const nodejsondb = require("node-json-db").JsonDB;

var db = new nodejsondb("warns", true, true, '/');

db.delete("/$mentioned[1]");]

$onlyIf[$noMentionMessage==all;]

$if[$noMentionMessage!=all]

$sendMessage[{title:Moderation | Unwarn}{description:you removed the warn #$noMentionMessage to <@​$mentioned[1]>}{color:GREEN};no]

$djsEval[const nodejsondb = require("node-json-db").JsonDB;

var db = new nodejsondb("warns", true, true, '/');

db.delete("/$mentioned[1]/$noMentionMessage");]

$endif

$onlyIf[$noMentionMessage!=;Type one warn id or all to remove warns]

$onlyIf[$mentioned[1]!=;Mention someone]`
}