module.exports = [{
    name: 'rockpaperscissor',
    aliases: ['rockpaperscissor', 'rps'],
    category: 'fun',
    description: 'Play Rock Paper Scissor With Me!',
    code: `
   $reactionCollector[$splitText[1];$authorID;1m;â,ð,â;Rock,Paper,Scissor;yes]
   $textSplit[$sendMessage[{title:Rock Paper Scissor!}
   {color:GREEN}
   {footer:RPS Game Command}
   {description:Choose Rock, Paper Or Scissor In Reaction!};yes]; ]`
   }, {
    type: 'awaitedCommand',
    name: 'Rock',
    code: `$editMessage[$message[1];{title:ð§  RPS GAME} {description:$randomText[
   **$username[$clientID] â Vs â You**
   
   ð¡ â It's a **TIE**.;
   **$username[$clientID] ð Vs â You**
   
   ð´ â You **LOST**.;
   **$username[$clientID] â Vs â You**
   
   ð¢ âYou **WON**]
   
   $randomText[ð Well Played !;ð Good Game !]} {color:GREEN} {footer: RPS Game!} {timestamp:ms} {thumbnail:$userAvatar[$clientID]}
   ]
   `
   }, {
    type: 'awaitedCommand',
    name: 'Paper',
    code: `
    $editMessage[$message[1];{title:ð§  RPS GAME} {description:$randomText[
   **$username[$clientID] ð Vs ð You**
   
   ð¡ â It's a **TIE**.;
   **$username[$clientID] â Vs ð You**
   
   ð´ â You **LOST**.;
   **$username[$clientID] â Vs ð You**
   
   ð¢ âYou **WON**.]
   
   $randomText[ð Well Played !;ð Good Game !]} {color:GREEN} {footer: RPS Game!} {timestamp:ms} {thumbnail:$userAvatar[$clientID]}
   `
   }, {
    type: 'awaitedCommand',
    name: 'Scissor',
    code: `
   $editMessage[$message[1];{title:ð§  RPS GAME} {description:$randomText[
   **$username[$clientID] â Vs â You**
   
   ð¡ â It's a **TIE**.;
   **$username[$clientID] â Vs â You**
   
   ð´ â You **LOST**.;
   **$username[$clientID] ð Vs â You**
   
   ð¢ âYou **WON**.]
   
   $randomText[ð Well Played !;ð Good Game !]} {color:GREEN} {footer: RPS Game!} {timestamp:ms} {thumbnail:$userAvatar[$clientID]}
   ]
   `
   }]