# Write user migration

### Initialize migration file
``` bash
npm run migrate create add-user-table
```

### Write UP migration implementation
``` js
pgm.createTable('users', {
  user_id: {
    type: 'serial',
    primaryKey: true,
  },
  name: {
    type: 'varchar(255)',
    notNull: true,
  },
  email: {
    type: 'varchar(255)',
    notNull: true,
    unique: true,
  },
  password_hash: {
    type: 'text',
    notNull: true,
  },
  created_at: {
    type: 'timestamp',
    notNull: true,
    default: pgm.func('current_timestamp'),
  },
});
```

### Write DOWN Migration implementation
``` js
pgm.dropTable('users');
```


### Run the migration
- node-pg-migrate keeps a table of migrations and track which need to run
- node-pg-migrate will use the db string in the .env file to connect to db
``` bash
npm run migrate up
```

### Commit
``` bash
git add .
git commit -m 'Adds session and user migrations'
```

Next:  
[Write user model](write-user-model.md)