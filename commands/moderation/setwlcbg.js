module.exports = ({
    name: "setwlcbg",
    aliases: ['setwelcomebg'],
    code: `
    $setServerVar[welcomeBg;$message[1]]
    Successfully set your welcome card bg!
    $onlyIf[$isValidLink[$message[1]]==true;You must enter a valid image link for your welcome bg to be]
    $onlyIf[$getUserVar[premium]==true;**$getVar[no] You must have Premium to setup Welcome Background**]`
  })