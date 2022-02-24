module.exports =({
    name: "iq",
    code: `$description[$username[$mentioned[1]] has **$random[10;500]** IQ!]
    $suppressErrors[$getVar[no] **Mention Someone**]
    $color[RANDOM]`
    })