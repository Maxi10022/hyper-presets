const fs = require('fs');
const path = require('path');
const fse = require('fs-extra');
const { getDataHome } = require('platform-folders');
const { getShellDir } = require('./shellHelper');

// Function to install templates for a specified shell
function install(shell) {
    const templatesDir = path.join(__dirname, 'templates');
    const hyperDir = path.join(getDataHome(), 'Hyper');
    const hyperTemplates = [];
    const shellProfiles = [];

    // Read the contents of the ./templates folder
    const templates = fs
        .readdirSync(templatesDir)
        .filter(item => fs.lstatSync(path.join(templatesDir, item)).isDirectory());

    // Iterate over each template
    for (const template of templates) {
        const shellDir = path.join(templatesDir, template, shell);
        const hyperFile = path.join(shellDir, `.hyper.${template}.js`);
        const profileFile = path.join(
            shellDir,
            `profile.${template}.${shell === 'powershell' ? 'ps1' : shell}`
        );

        // Check if both files exist before storing them in the respective lists
        if (fs.existsSync(hyperFile) && fs.existsSync(profileFile)) {
            hyperTemplates.push(hyperFile);
            shellProfiles.push(profileFile);
        }
    }

    // Copy hyperTemplates to the hyperDir
    for (const hyperTemplate of hyperTemplates) {
        const destPath = path.join(hyperDir, path.basename(hyperTemplate));
        fse.copySync(hyperTemplate, destPath);
        console.log(`Copied ${hyperTemplate} to ${destPath}`);
    }

    // Get the profilesDir for the specified shell
    const shellDir = getShellDir(shell);

    // Copy shellProfiles to the profilesDir
    for (const shellProfile of shellProfiles) {
        const destPath = path.join(shellDir, path.basename(shellProfile));
        fse.copySync(shellProfile, destPath);
        console.log(`Copied ${shellProfile} to ${destPath}`);
    }
}

// Run the install function with a shell argument
const shellArg = process.argv[2];
if (!shellArg) {
    console.error('Please provide a shell argument (e.g., powershell)');
    process.exit(1);
}


module.exports = { install } 