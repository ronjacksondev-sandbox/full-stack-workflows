# Setup migrations

### Install migration runner
``` bash
npm install node-pg-migrate
```

### Add migrate script
- Set migration output directory with -m
``` bash
npm pkg set scripts.migrate="node-pg-migrate -m src/db/migrations"
```

### Commit
``` bash
git add .
git commit -m 'Adds node-pg-migrate'
```

Next:  
[Setup Express](setup-express.md)