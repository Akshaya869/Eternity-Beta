module.exports = ({
    name:"wasted",
    category:"Fun",
    code:`$author[Life is a waste, right $username?;$authoravatar]
    $description[<@$authorid> says life is a waste, who even cares! $customemoji[$getvar[wasted]]]
    $image[$httpRequest[https://api.avux.ga/wasted;GET;;message;error;X-API-Key:6Zphw8T7yeOEJ9X8M4]]
    $color[RANDOM]
    $servercooldown[2s;On a cooldown!]
    $onlyif[$isbot[$authorid]==false;]`})