# Setup Git Repo

## Initialize Git Repo

### Create repository on cloud host and get url

### Open terminal on local machine

### Create directory
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
git push --set-upstream origin <branch>
```

## Setup initial repo files

### Create gitignore
- Note: this command is a nodejs specific way of auto generating a gitignore
- The template parameter takes values such as node, python, dotnet etc.
``` bash
npx gitignore <template>
```

### Create README.md
``` bash
echo '<Project name>' >> README.md
```

### Commit files
``` bash
git add .
git commit -m 'Adds gitignore and README'
git push
```


Next:  
[Setup Node](setup-node.md)