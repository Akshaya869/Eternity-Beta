module.exports = {
    name: "slowmode",
    code: `
    $title[Slowmode]
    $description[Successfully Set Slowmode of <#$channelID> || Slowmode - **$message[1]**]
    $slowmode[$channelID;$message[1]]
    $color[GREEN]
    $onlyPerms[manageserver;ban;kick;**$getVar[no]Error! No Perms**]
    `
  }