const yargs = require('yargs/yargs');
const { hideBin } = require('yargs/helpers');
const { install } = require('./install'); 

function parseArgs() {
  const argv = yargs(hideBin(process.argv))
    .usage('Usage: $0 --name <name> | --install <shell>')
    .option('name', {
      alias: 'n',
      type: 'string',
      description: 'Provide a name',
      demandOption: false // No longer required as we added another option
    })
    .option('install', {
      type: 'string',
      description: 'Install templates for the specified shell',
      demandOption: false
    })
    .help('h')
    .alias('h', 'help')
    .argv;

  // Handle the `--install` argument

  if (argv.install) {
    console.log(`Installing templates for shell: ${argv.install}`);
    install(argv.install);
    process.exit(0);
  }

  // Return the name if present, otherwise null
  if (!argv.name) {
    yargs().showHelp();
  }

  return argv.name || null;
}

module.exports = { parseArgs };
