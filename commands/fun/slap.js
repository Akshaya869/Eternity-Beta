module.exports = ({
    name:"slap",
    category:"Fun",
    code:`$author[$username slapped $username[$mentioned[1]], their face is red now!;$authoravatar]
    $description[<@$authorid> slapped <@$mentioned[1]> on their tomato red face! $customemoji[$getvar[slap]]]
    $image[$httpRequest[https://api.avux.ga/slap;GET;;message;error;X-API-Key:6Zphw8T7yeOEJ9X8M4]]
    $color[RANDOM]
    $onlyif[$mentioned[1;yes]!=$authorid;Mention someone to slap!]
    $servercooldown[2s;On a cooldown!]
    $onlyif[$isbot[$authorid]==false;]`})