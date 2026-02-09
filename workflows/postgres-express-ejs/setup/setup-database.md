# Setup Database

- This assumes that you already have a postgres database installed

## Create database

### Connect to postgres with psql
``` bash
psql -U postgres
```

### Run create database command
``` bash
create database dev_demo_db;
``` 

### Exit psql
``` bash
\q
```

### Enter connection string into .env file
- Any special characters in password will need to be url encoded
- @ = %40
``` bash
# .env
DATABASE_URL=postgres://postgres:<password>@localhost:5432/
```

## Setup database driver

### Install pg database driver
``` bash
npm install pg
```

## Create database module
- This is the module that will be used in your application app code

### Create db.js file
``` bash
touch src/stdb/index.js
```

### Code a shared connection pool
``` js
// db/index.js
import pg from 'pg';

const { Pool } = pg;
const pool = new Pool({
  connectionString: process.env.DATABASE_URL
});

export default pool;
```

### Commit
``` bash
git add .
git commit -m 'Adds db index file'
```

Next:  
[Setup Migrations](setup-migrations.md)