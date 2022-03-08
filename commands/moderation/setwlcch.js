module.exports = {
   name: "setwelcomechannel",
   aliases: "setwlcch",
   code: `
   $title[$getVar[yes]Success]
   $description[Successfully set the Welcome Channel to <#$mentionedChannels[1]>]
   $color[GREEN]
   $onlyPerms[manageroles;ban;kick;**$getvar[no]You don't have enough permissions to use this command**]
   $setServerVar[wlcChannel;$message[1]]
   $onlyIf[$getServerVar[wlcToggle]==true;**$getVar[no]Enable Welcome System before running this command**
   \`e?toggle-welcome enable\`]
   `
}