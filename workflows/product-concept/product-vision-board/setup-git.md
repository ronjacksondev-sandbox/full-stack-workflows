# Setup Git

[Home](../../../index.md) > [Course](../../../course-outline.md) > [Product Concept](../index.md) > [Product Vision Board](../product-vision-board/index.md) > Setup Git


## Create remote repository on GitHub
- **Repo Name:** product-vision-board
- **Visibility:** Public
- **.gitignore:** 'No .gitignore'

> GitHub > New Repository > Create repository
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

## Setup branch name
``` bash
git branch -move main
```

## Setup initial commit
``` bash
git commit --allow-empty -m 'Initial commit'
```

## Push and set upstream repo
``` bash
git push --set-upstream origin main
```

## Setup gitignore
``` bash
npx gitignore node
```

## Create README.md
``` bash
echo '# Product Vision Board' >> README.md
```

## Commit
``` bash
git add ..
git commit -m 'Adds gitignore and README'
```

| | |
| :--- | ---: |
| [< Previous: Read Tech Stack](tech-stack.md) | [Next: Setup Node >](setup-node.md) |
| | |

