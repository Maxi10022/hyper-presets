function Prompt {
    "$(Get-Location) > "
}

function Set-TerminalTitle {
    param (
        [string]$Title
    )
    $host.UI.RawUI.WindowTitle = $Title
}
