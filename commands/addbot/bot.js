module.exports = {
name: "bot",
code: `
$if[$message[1]==accept]
<@$message[3]>,Your Bot was Accepted by <@$authorid>
$setUserVar[bot;false]
$elseIf[$message[1]==decline]
<@$message[3]>,Your Bot was Declined by <@$authorid>!]
$setUserVar[bot;false]
$endelseif
$endif
`
}