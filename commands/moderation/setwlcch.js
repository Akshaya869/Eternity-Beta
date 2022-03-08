module.exports = {
   name: "setwelcomechannel",
   aliases: "setwlcch",
   code: `
   $title[$getVar[yes]Success]
   $description[Successfully set the Welcome Channel to <#$mentionedChannels[1]>]
   $color[GREEN]
   $onlyPerms[manageroles;ban;kick;**$getvar[no]You don't have enough permissions to use this command**]
   $setServerVar[wlcChannel;$message[1]]
   `
}