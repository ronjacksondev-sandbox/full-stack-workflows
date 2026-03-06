# Write tag migration

### Initialize migration file
``` bash
npm run migrate create tag-table
```

### Write up migration
``` js
pgm.createTable('tags', {
  tag_id: {
    type: 'serial',
    primaryKey: true
  },
  user_id: {
    type: 'integer',
    notNull: true,
    references: '"users"',
    onDelete: 'cascade'
  },
  name: {
    type: 'text',
    notNull: true
  }
});

pgm.createTable('task_tags', {
  task_id: {
    type: 'integer',
    notNull: true,
    references: '"tasks"',
    onDelete: 'cascade'
  },
  tag_id: {
    type: 'integer',
    notNull: true,
    references: '"tags"',
    onDelete: 'cascade'
  }
});

pgm.addConstraint('task_tags', 'task_tags_pkey', { primaryKey: ['task_id', 'tag_id'] });
```

### Write down migration
``` js
pgm.dropTable('task_tags');
pgm.dropTable('tags');
```

### Run migration
``` bash
npm run migrate up
```

### Commit
``` bash
git add .
git commit -m 'Adds tag migration'
```

Next:  
[Write tag model](write-tag-model.md)