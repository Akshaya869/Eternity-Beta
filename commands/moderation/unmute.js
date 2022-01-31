module.exports = ({
  name: "unmute",
  code: `
  $takeRole[$mentioned[1];Muted]
  **Successfully Unmuted <@$mentioned[1]>**
  $supressErrors[**$getVar[no]Error! Muted Role is not created**]
  $onlyPerms[kick;ban;**$getVar[no]You Cannot Use This Command (Less Perms,Require- Ban & Kick)**]
  `
})