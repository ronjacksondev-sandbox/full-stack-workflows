# Write session migration

### Initialize migration file
``` bash
npm run migrate create session-table
```

### Write UP migration implementation
``` js
// Create session table
pgm.createTable('session', {
  sid: {
    type: 'varchar',
    primaryKey: true,
    notNull: true,
  },
  sess: {
    type: 'jsonb',
    notNull: true,
  },
  expire: {
    type: 'timestamp',
    notNull: true,
  },
});

// Index on expire for efficient cleanup of expired sessions
pgm.createIndex('session', 'expire');

```

### Write DOWN Migration implementation
``` js
pgm.dropTable('session');
```


### Run the migration
``` bash
npm run migrate up
```

Next:  
[Write user migration](write-user-migration.md)