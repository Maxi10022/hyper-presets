#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { getDataHome } = require('platform-folders')
const { parseArgs } = require('./argParser');
const { updateProfile } = require('./updateShell');

const hyperDir = path.join(getDataHome(), 'Hyper');
const hyperConfigFile = path.join(hyperDir, '.hyper.js');

// Check if the main Hyper config file exists
if (!fs.existsSync(hyperConfigFile)) {
  console.error('Error: The main Hyper configuration file (~/.hyper.js) was not found.');
  console.error('Make sure Hyper is properly installed and configured.');
  process.exit(1);
}

const profileName = parseArgs();

if (!profileName) {
  process.exit(1);
}

const profileFile = path.join(hyperDir, `.hyper.${profileName}.js`);

// Check if the profile configuration file exists
if (!fs.existsSync(profileFile)) {
  console.error(`Error: Profile configuration file (~/${path.basename(profileFile)}) not found.`);
  console.error('Please create the profile configuration file first.');
  process.exit(1);
}

// Copy the selected profile to ~/.hyper.js
try {
  fs.copyFileSync(profileFile, hyperConfigFile);
  updateProfile(profileName);
  console.log(`Switched to ${profileName} profile.`);
  console.log('Reload or restart your Hyper terminal!')
} catch (error) {
  console.error('Error copying profile file:', error.message);
  process.exit(1);
}

