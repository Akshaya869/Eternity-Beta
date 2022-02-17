module.exports = ({
    name:"snipe",
    code:`$author[Snipe #$sub[$get[number];1] - Deleted by $usertag[$get[author]];$useravatar[$get[author]]]
    $description[$get[content]]
    $addfield[** **;Deleted On <t:$get[datestamp]>]
    $footer[Requested by $username | Snipe $sub[$get[number];1]/$sub[$gettextsplitlength;1]]
    $addtimestamp
    $let[author;$advancedtextsplit[$getservervar[snipe_author];&&&&;$get[number]]]
    $let[content;$advancedtextsplit[$getservervar[snipe_messages];&&&&;$get[number]]]
    $let[datestamp;$advancedtextsplit[$getservervar[snipe_datestamp];&&&&;$get[number]]]
    $onlyif[$gettextsplitlength>=$get[number];There are only $sub[$gettextsplitlength;1] sniped messages]
    $textsplit[$getservervar[snipe_messages];&&&&]
    $onlyif[$get[number]!=1;**No Deleted Messages Found**]
    $let[number;$sum[$replacetext[$replacetext[$isnumber[$message[1]];true;$message[1]];false;1];1]]`
})