module.exports = ({
    name:"$alwaysExecute",
    code:`$if[$message==$getServerVar[cc1n]]
    $getServerVar[cc1r]
    $elseIf[$message==$getServerVar[cc2n]]
    $getServerVar[cc2r]
    $endelseIf
    $elseIf[$message==$getServerVar[cc3n]]
    $getServerVar[cc3r]
    $endelseIf
    $else
    $endif`
    })