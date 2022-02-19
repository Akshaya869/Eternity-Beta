module.exports = {
    name: "warnings",
    code: `
    $author[Warns from $userTag[$findUser[$message[1];no]];$userAvatar[$findUser[$message[1];no]]]
$footer[$getObjectProperty[total] total]
$color[GREEN]

$description[$getObjectProperty[text]]

$onlyIf[$getObjectProperty[text]!=;]

$djsEval[const { promisify } = require("util") 

let user = '$findUser[$message[1];no]';

var read = promisify(require('read-file')) 

read('warns.json', 'utf8').then(buffer => {

try{

const warns = JSON.parse(buffer)

const obj = Object.values(warns[user\\]).filter(a => a.reason && a.mod && a.id) 

if (!obj.length) throw new Error("ignore") 

d.object.total = obj.length
d.object.text = obj.map((data, number) => 'Warn #' + number + ':\\n└ ID: ' + data.id + '\\n└ Reason: ' + data.reason + '\\n└ Mod: ' + data.mod).join("\\n\\n")

} catch(e) {

message.channel.send('No data about this person')

} 

});]

$createObject[{}]
$onlyIf[$findUser[$message[1];no]!=undefined;User not found]

$argsCheck[>1;Args are missing L]`
}