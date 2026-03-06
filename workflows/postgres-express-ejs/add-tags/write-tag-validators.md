# Write tag validators

### Add `tagValidators.js`
``` bash
touch src/validators/tagValidators.js
```

### Wrote `tagValidators.js`
``` js
export function validateCreateTag({name}) {
  const errors = [];

  if (!name || typeof name !== "string") {
    errors.push("Name is required and must be a string.");
  }

  if (name && name.trim().length === 0) {
    errors.push("Name cannot be empty or whitespace only.");
  }

  return {
    valid: errors.length === 0,
    errors,
    data: {
      name: name
    }
  };
}

export function validateUpdateTag({name}) {
  const errors = [];

  if (name !== undefined && typeof name !== "string") {
    errors.push("Name must be a string.");
  }

  if (name !== undefined && name.trim().length === 0) {
    errors.push("Name cannot be empty or whitespace only.");
  }

  return {
    valid: errors.length === 0,
    errors,
    data: {
      name: name
    }
  };
}

export function validateAddTagToTask({task_id, tag_id}) {
  const errors = [];

  if (!Number.isInteger(task_id) || task_id <= 0) {
    errors.push("Task ID must be a positive integer.");
  }

  if (!Number.isInteger(tag_id) || tag_id <= 0) {
    errors.push("Tag ID must be a positive integer.");
  }

  return {
    valid: errors.length === 0,
    errors,
    data: {
      task_id: task_id,
      tag_id: tag_id
    }
  };
}

export function validateRemoveTagFromTask({task_id, tag_id}) {
  const errors = [];

  if (!Number.isInteger(task_id) || task_id <= 0) {
    errors.push("Task ID must be a positive integer.");
  }

  if (!Number.isInteger(tag_id) || tag_id <= 0) {
    errors.push("Tag ID must be a positive integer.");
  }

  return {
    valid: errors.length === 0,
    errors,
    data: {
      task_id: task_id,
      tag_id: tag_id
    }
  };
}
```

### Commit
``` bash
git add .
git commit -m 'Adds tag validators'
```

Next:  
[Write tag controller](write-tag-controller.md)