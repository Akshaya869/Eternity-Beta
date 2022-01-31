bot.command({
  name: "setmute",
  description: "Set the mute role of your server",
  category: "Moderation",
  usage: "e?setmute",
  code:`$createRole[Muted;000000;no;no]
  **Mute Setup Successful**
  $onlyAdmin[**$getVar[no] You need Admin Permission to use this Command**]
  `
  })