function Prompt {
    " > "
}

function Set-TerminalTitle {
    param (
        [string]$Title
    )
    $host.UI.RawUI.WindowTitle = $Title
}
