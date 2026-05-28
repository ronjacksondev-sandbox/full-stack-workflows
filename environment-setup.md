# Environment Setup

Below are the items to setup in your local Windows environment before running any workflow tutorials

## Windows Pre-installed Programs (fyi)
- Powershell
- Windows Terminal
- WinGet

## Git & Git Bash
1. Open Windows Terminal
1. Check installation via version
1. If needed, install via winget
    ``` powershell
    winget install Git.Git
    ```

## Node & NPM & Fast Node Manager

- To install Node and npm, first install a node manager called Fast Node Manager (FNM)

### Install FNM
``` bash
winget install Schniz.fnm
```

### Verify FNM installed successfully
``` bash
fnm --version
```

### Install the LTS version of NodeJS
- Checkout [nodejs](http://nodejs.org) for LTS version number
``` bash
fnm install <lts-version-number>
```

### Setup shell (Git Bash) to use FNM
1. Go to home directory
1. Look for `.bashrc` file
1. Add the following line
``` bash
eval "$(fnm env --use-on-cd --shell bash)"
```

### Close and reopen terminal and test
- The following command should display the same value which was installed earlier
``` bash
FNM current
```
``` bash
node --version
```