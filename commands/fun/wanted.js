module.exports = ({
    name:"wanted",
    category:"Fun",
    code:`$author[$username[$mentioned[1;yes]] is wanted!;$authoravatar]
    $description[<@$authorid>, $username[$mentioned[1;yes]] is being searched for by the police! $customemoji[$getvar[wanted]]]
    $image[https://api.avux.ga/wanted?avatar=$replacetext[$useravatar[$mentioned[1;yes]];.webp;.png]]
    $color[RANDOM]
    $servercooldown[2s;On a cooldown!]
    $onlyif[$isbot[$authorid]==false;]`})