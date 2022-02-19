module.exports = {
    name: 'owoify',
    description: ' turn any word into nonsensical babyspeak',
    category: 'Fun & Games',
    usage: "e?owoify [message]",
    code: `
   $jsonRequest[https://fuyuumi.ga/api/v1/fun/owoify?text=$message;message;Something went wrong]`
   }