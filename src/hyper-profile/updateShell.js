const fs = require('fs');
const path = require('path');
const { getShellDir } = require('./shellHelper');
const defaultProfileName = 'Microsoft.PowerShell_profile.ps1';

/**
 * Duplicates a given profile file and renames it to the default $PROFILE name.
 * @param {string} profileName - The new .ps1 file name to set for $PROFILE.
 */
function updateProfile(profileName) {
    // Get the path to the user's Documents\WindowsPowerShell directory
    const shellDir = getShellDir("powershell");
    const defaultProfilePath = path.join(shellDir, defaultProfileName);
    const profilePath = path.join(shellDir, `profile.${profileName}.ps1`);

    // Check if the source profile file exists
    if (!fs.existsSync(profilePath)) {
        console.error(`Error: Source file ${profileName} does not exist.`);
        return;
    }

    // Copy the file and overwrite if it already exists
    try {
        fs.copyFileSync(profilePath, defaultProfilePath);
        console.log(`Profile updated.`);
    } catch (error) {
        console.error(`Error copying file: ${error.message}`);
    }
}


module.exports = { updateProfile }
