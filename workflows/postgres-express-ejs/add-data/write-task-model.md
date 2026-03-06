# Write task model

### Add `task.js` model file
``` bash
touch src/models/task.js
```


### Write `task.js` model
``` js
import pool from "../db/index.js";

// Create a new task
export async function createTask({ user_id, title, completed, due_date }) {
  const result = await pool.query(
    `INSERT INTO tasks (user_id, title, completed, due_date)
     VALUES ($1, $2, $3, $4)
     RETURNING task_id, user_id, title, completed, due_date`,
    [user_id, title, completed ?? false, due_date]
  );
  return result.rows[0];
}

// Find all tasks for a given user
export async function findTasksByUserId(user_id, { completed } = {}) {
  const result = await pool.query(
    `SELECT task_id, user_id, title, completed, due_date
     FROM tasks
     WHERE user_id = $1
       AND ($2::boolean IS NULL OR completed = $2)
     ORDER BY task_id ASC`,
    [user_id, completed ?? null]
  );
  return result.rows;
}
// Find a single task by its task_id
export async function findTaskByTaskId(task_id) {
  const result = await pool.query(
    `SELECT task_id, user_id, title, completed, due_date
     FROM tasks
     WHERE task_id = $1`,
    [task_id]
  );
  return result.rows[0];
}

// Update a task
export async function updateTask(task_id, { title, completed, due_date }) {
  const result = await pool.query(
    `UPDATE tasks
     SET title = $1,
         completed = $2,
         due_date = $3
     WHERE task_id = $4
     RETURNING task_id, user_id, title, completed, due_date`,
    [title, completed, due_date, task_id]
  );
  return result.rows[0];
}

// Complete a task
export async function completeTask(task_id) {
  const result = await pool.query(
    `UPDATE tasks
     SET completed = true
     WHERE task_id = $1
     RETURNING task_id, user_id, title, completed, due_date`,
    [task_id]
  );
  return result.rows[0];
}

// Delete a task
export async function deleteTask(task_id) {
  const result = await pool.query(
    `DELETE FROM tasks
     WHERE task_id = $1
     RETURNING task_id`,
    [task_id]
  );
  return result.rows[0]; // returns { task_id: ... } or undefined if not found
}
```

### Commit
``` bash
git add .
git commit -m 'Adds task model'
```

Next:  
[Write task validator](write-task-validator.md)