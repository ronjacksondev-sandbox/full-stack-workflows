# Setup Git

[Home](../../../index.md) > [Course](../../../course-outline.md) > Product Concept > [Landing Page](overview.md) > Setup Git

## Create remote repository
> GitHub > New Repository
> Visibility = *Public*
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

## Setup gitignore
``` bash
npx gitignore node
```

## Create README.md
``` bash
echo '# Landing Page' >> README.md
```

## Commit
``` bash
git add ..
git commit -m 'Adds gitignore and README'
```


| | |
| :--- | ---: |
| [< Previous: Read Objectives](objectives.md) | [Next: Setup Node >](setup-node.md) |
| | |
