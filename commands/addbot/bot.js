module.exports = {
name: "bot",
code: `
$if[$message[1]==accept]
<@$mentioned[1]>,Your Bot was Accepted by <@$authorid>
$setUserVar[bot;false]
$elseIf[$message[1]==decline]
<@$mentioned[1]>,Your Bot was Declined by <@$authorid>!]
$setUserVar[bot;false]
$endelseif
$endif
`
}