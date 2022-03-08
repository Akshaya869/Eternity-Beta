module.exports = {
    name: "toggle-welcome",
    code: `$if[$message[1]==enable]
    $description[**$getVar[yes] Successfully Enabled Welcome System]
    $setServerVar[wlcToggle;true]
    $onlyIf[$getServerVar[wlcToggle]==false;**$getVar[no]Welcome System is already enabled**]
    $endif
    $if[$message[1]==disable]
    $description[**$getVar[yes] Successfully Disabled Welcome System]
    $setServerVar[wlcToggle;false]
    $onlyIf[$getServerVar[wlcToggle]==true;**$getVar[no]Welcome System is already disabled**]
    $endif
    $if[$message[1]==]
    $description[**Listen Mate you have 2 fields**
    \`e?toggle-welcome enable (to enable welcome)\`
                      or
    \`e?toggle-welcome disable (to disable welcome)\`]
    `
}