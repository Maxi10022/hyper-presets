const path = require('path');
const { getDocumentsFolder } = require('platform-folders');

function getShellDir(shell) {
    if (shell.toLowerCase() === 'powershell') {
        return path.join(getDocumentsFolder(), 'WindowsPowerShell');
    }
    // Add more cases for other shells as needed
    throw new Error(`Profiles directory not defined for shell: ${shell}`);
}

module.exports = { getShellDir };
