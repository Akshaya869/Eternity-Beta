module.exports = ({
    name: "tweet",
    code: `
   $footer[Requested By $username | $addTimestamp]
   $image[https://api.no-api-key.com/api/v2/trump?message=$replaceText[$message; ;+;-1]]
   $onlyIf[$message!=;You need to type something for the trump to tweet!]
   $color[RANDOM]`
   });