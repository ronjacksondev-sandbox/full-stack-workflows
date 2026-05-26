# Setup Git

## Create remote repository on GitHub
- Repo Name: product-vision-board
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
mkdir product-vision-board
```

## Initialize git
``` bash
cd product-vision-board
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

Next: [Write HTML head](write-html-head.md)

