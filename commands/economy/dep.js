module.exports = ({
    name: "deposit",
    code:`
    $author[$userTag[$authorID];$authorAvatar]
    $footer[You now have $numberseparator[$getGlobalUserVar[Bank;$authorID]] in your bank]
    $color[FFC0CB]
    
    
    $setGlobalUserVar[Money;$sub[$getGlobalUserVar[Money;$authorID];$replaceText[$replaceText[$checkCondition[$toLowercase[$message[1]]==all];true;$getGlobalUserVar[Money;$authorID]];false;$message[1]]]]
    
    
    $setGlobalUserVar[Bank;$sum[$getGlobalUserVar[Bank;$authorID];$replaceText[$replaceText[$checkCondition[$toLowercase[$message[1]]==all];true;$getGlobalUserVar[Money;$authorID]];false;$message[1]]]]
   
    $onlyIf[$replaceText[$replaceText[$checkCondition[$toLowercase[$message[1]]==all];true;$getGlobalUserVar[Money;$authorID]];false;$message[1]]<=$getGlobalUserVar[Money;$authorID];$getVar[no] You don't have enough money to deposit to your bank!]
    
    $onlyIf[$checkContains[true;$checkCondition[$isNumber[$message[1]]==true];$checkCondition[$toLowercase[$message[1]]==all]]==true;$getVar[no] Please enter a valid number]
    $description[Successfully deposited $replaceText[$replaceText[$checkCondition[$toLowercase[$message[1]]==all];true;**🪙$numberseparator[$getGlobalUserVar[Money]]** in your bank];false;**🪙[$message[1]] in your Bank**]] `,
    aliases: ['dep']
   })