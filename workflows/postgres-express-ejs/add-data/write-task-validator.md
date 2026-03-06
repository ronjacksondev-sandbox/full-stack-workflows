# Write task validator

### Add `taskValidators.js`
``` bash
touch src/validators/taskValidators.js
```

### Write `taskValidators.js`
``` js
export function validateCreateTask({title, due_date, completed}) {
  const errors = [];

  if (!title || typeof title !== "string") {
    errors.push("Title is required and must be a string.");
  }

  if (completed !== undefined && typeof completed !== "boolean") {
    errors.push("Completed must be a boolean.");
  }

  if (due_date !== undefined && isNaN(Date.parse(due_date))) {
    errors.push("Due date must be a valid date string.");
  }

  return {
    valid: errors.length === 0,
    errors,
    data: {
      title: title,
      completed: completed ?? false,
      due_date: due_date ?? null
    }
  };
}

export function validateUpdateTask({title, due_date, completed}) {
  const errors = [];

  if (title !== undefined && typeof title !== "string") {
    errors.push("Title must be a string.");
  }

  if (completed !== undefined && typeof completed !== "boolean") {
    errors.push("Completed must be a boolean.");
  }

  if (due_date !== undefined && due_date !== null && isNaN(Date.parse(due_date))) {
    errors.push("Due date must be a valid date string.");
  }

  return {
    valid: errors.length === 0,
    errors,
    data: {
      title: title,
      completed: completed,
      due_date: due_date
    }
  };
}

export function validateCompleteTask({completed}) {
  const errors = [];

  // You might not need a body at all, but if you want to enforce something:
  if (completed !== undefined && typeof completed !== "boolean") {
    errors.push("Completed must be a boolean.");
  }

  return {
    valid: errors.length === 0,
    errors,
    data: {
      completed: true
    }
  };
}
```

### Commit
``` bash
git add .
git commit -m 'Adds task validators'
```

Next:  
[Write task api controller](write-task-api-controller.md)