# Hyper Profile Manager

## Quickstart

Installation: 

```bash
npm i -g hyper-profile
```

Install available templates for your shell: 

```bash
hyper-profile --install <shell>
```

Currently available shells:

* powershell

Switch between profiles:

```bash
hyper-profile --name <profileName>
```

Available profiles: 

* default
* marketing

<hr>

## Overview
**Hyper Profile Manager** is a command-line tool designed to streamline the management of different Hyper terminal configurations and associated shell profiles. It allows you to switch between predefined Hyper profiles and shell-specific profile scripts seamlessly.

## Features
- **Profile Switching**: Quickly switch between different Hyper terminal profiles.
- **Template Installation**: Install profile templates for supported shells (e.g., PowerShell).
- **Shell Profile Management**: Automatically updates the shell profile when switching Hyper profiles.
- **Customizable Profiles**: Supports custom profiles for Hyper and associated shell configurations.

## Available Commands
The tool provides the following main commands for usage:

### 1. Profile Selection
Switch to a different Hyper profile:

```bash
hyper-profile --name <profileName>
```

- `<profileName>`: Name of the profile you want to activate (e.g., `default`, `marketing`).

### 2. Template Installation
Install templates for a specific shell:

```bash
hyper-profile --install <shell>
```

- `<shell>`: The shell for which to install templates (e.g., `powershell`).

## Usage Guide
### Switching Profiles
1. Ensure the `~/.hyper.js` main Hyper configuration file is present.
2. Run the command:
   ```bash
   hyper-profile --name default
   ```
   This will switch the current configuration to the `default` profile and update the corresponding shell profile.

### Installing Shell Templates
To install profile templates for a specific shell, use:
```bash
hyper-profile --install powershell
```
This copies predefined templates to the appropriate directories for Hyper and the specified shell.

## File Structure
- **`hyper-profile.js`**: The main entry point for profile switching and command parsing.
- **`argParser.js`**: Parses command-line arguments and handles `--name` and `--install` options.
- **`updateShell.js`**: Updates the shell profile based on the selected Hyper profile.
- **`install.js`**: Installs templates for a specified shell, copying necessary files.
- **`shellHelper.js`**: Helper functions for determining the shell profile directory.

## Requirements
- **Node.js**: Ensure Node.js is installed.

## Supported Profiles
The tool currently supports the following profiles:
- `default`: Standard configuration for PowerShell.
- `marketing`: Custom configuration for marketing purposes with PowerShell support.

## Error Handling
- If the main Hyper configuration file (`~/.hyper.js`) or a specific profile configuration file is missing, an error message will be displayed, and the process will exit.
- Ensure templates exist in the `templates` directory for proper installation.

## Limitations
- Currently, only PowerShell profiles are supported. To add support for other shells, modifications in `shellHelper.js` and related modules are required.
- The tool assumes the existence of predefined template directories under `templates`.

## Example Scenarios
1. **Switch to the `default` profile**:
   ```bash
   hyper-profile --name default
   ```

2. **Install templates for PowerShell**:
   ```bash
   hyper-profile --install powershell
   ```

## Contribution
Feel free to contribute by adding support for more shells, enhancing error handling, or improving the command options.

## License
This project is open-source and licensed under the [MIT License](LICENSE).
