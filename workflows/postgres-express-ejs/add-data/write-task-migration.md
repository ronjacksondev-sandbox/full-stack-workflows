# Write task migration

### Initialize migration file
``` bash
npm run migrate create task-table
```

### Write up migration 
``` js
pgm.createTable('tasks', {
  task_id: {
    type: 'serial',
    primaryKey: true
  },
  user_id: {
    type: 'integer',
    notNull: true,
    references: '"users"',
    onDelete: 'cascade'
  },
  title: {
    type: 'text',
    notNull: true
  },
  completed: {
    type: 'boolean',
    notNull: true,
    default: false
  },
  due_date: {
    type: 'date'
  }
});

```

### Write down migration
``` js
pgm.dropTable('tasks');
```

### Run migration
``` bash
npm run migrate up
```

### Commit
``` bash
git add .
git commit -m 'Adds tasks table'
```

Next:
[Write task model](write-task-model.md)