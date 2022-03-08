module.exports = {
    name: "toggle-wlc",
    code: `$if[$message[1]==enable]
    $description[**$getVar[yes] Successfully Enabled Welcome System]
    $setServerVar[wlcToggle;true]
    $onlyIf[$getServerVar[wlcToggle]==false;**$getVar[no]Welcome System is already enabled**]
    $color[GREEN]
    $endif
    $if[$message[1]==disable]
    $description[**$getVar[yes] Successfully Disabled Welcome System]
    $setServerVar[wlcToggle;false]
    $onlyIf[$getServerVar[wlcToggle]==true;**$getVar[no]Welcome System is already disabled**]
    $color[GREEN]
    $endif
    $if[$message[1]==;**Listen Mate you have 2 fields**
    \`e?toggle-welcome enable (to enable welcome)\`
                      or
    \`e?toggle-welcome disable (to disable welcome)\`]
    $color[RED]
    `
}