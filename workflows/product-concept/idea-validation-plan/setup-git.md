# Setup Git

## Create remote repository on GitHub
- Repo Name: idea-validation-plan
- Set visibility to public (so GitHub pages can be enabled)
- Set 'No .gitignore'

> GitHub > New Repository
> Copy link to remote repository

## Open terminal and navigate to repo folder
``` bash
cd ./source/repos
```

## Add directory
``` bash
mkdir idea-validation-plan
```

## Initialize git
``` bash
cd idea-validation-plan
git init
```

## Add git remote
``` bash
git remote add origin <remote-repo-link>
```

## Setup branch
``` bash
git branch -M main
```

## Setup initial commit
``` bash
git commit --allow-empty -m 'Initial commit'
```

## Push and set upstream repo for main branch
``` bash
git push --set-upstream origin main
```

## Create feature branch and switch to it
``` bash
git switch -c feature/new-page
```

## Setup gitignore
``` bash
npx gitignore node
```

## Commit and set upstream
``` bash
git add .
git commit -m 'Adds gitignore'
git push -u origin feature/new-page
```

Next:  
[Setup Node](setup-node.md)

