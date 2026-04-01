# Setup Git Repo

## Initialize Git Repo

### Create `public` repository on GitHub and copy url to clipboard
- Repository is public so github pages can run without premium subscription

### Open terminal on local machine

### Create `code-docs-##` directory
``` bash
mkdir <folder-name>
```

### Navigate to folder
``` bash
cd <folder-name>
```

### Initialize git repository
``` bash
git init
```

### Name branch
``` bash
git branch -m main
```

### Create initial commit
- Empty commit allows us to push and set-upstream right away

``` bash
git commit --allow-empty -m 'Initial commit'
```

### Set remote url location of cloud repository
- The name 'origin' is the common convention
``` bash
git remote add origin <url path>
```

### Push repo and set default upstream repo and branch for pushing
- Upstream denotes the master copy
``` bash
git push --set-upstream origin main
```

## Setup initial repo files

### Create gitignore
``` bash
npx gitignore node
```

### Create README.md
``` bash
echo '# Code Docs' >> README.md
```

### Commit files
``` bash
git add .
git commit -m 'Adds gitignore and README'
git push
```


Next:  
[Setup Node](setup-node.md)