module.exports = {
    name: "addbot",
    code: `
    $description[**$username wants to add a bot!
    
    Bot Name: $username[$message[1]]
    Prefix: $message[2]

    Invite Link:- https://discord.com/oauth2/authorize?client_id=$message[1]&scope=bot&permissions=0

    $username,Please Wait! Your Bot will be Tested soon...!**]
    $setUserVar[bot;true]
    `
}