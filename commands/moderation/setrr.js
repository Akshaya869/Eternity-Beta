module.exports = ({
    name:"setrr",
    code:`$setservervar[rrmid;$splittext[1]]
   $textsplit[$sendmessage[{author:Reaction roles:$servericon}{description:$nomentionmessage}{footer:React with 👍 to get the role $rolename[$mentionedroles[1]]!}{color:RANDOM};yes]; ]
   $setservervar[rrr;$mentionedroles[1]]
   $onlyif[$nomentionmessage!=;Please enter a message!]
   $onlyif[$mentionedroles[1]!=;Please mention the role to be given!]`})