# Setup Git

## Create remote repository
> GitHub > New Repository
> Copy link to remote repository

## Add directory
``` bash
mkdir landing-page
```

## Initialize git
``` bash
cd landing-page
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

## Push and set upstream repo
``` bash
git push --set-upstream origin main
```
