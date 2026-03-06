# Write tag model

### Add `tag.js` model file
``` bash
touch src/models/tag.js
```


### Write `tag.js` model
``` js
import pool from "../db/index.js";

// Create a new tag
export async function createTag({ user_id, name }) {
  const result = await pool.query(
    `INSERT INTO tags (user_id, name)
     VALUES ($1, $2)
     RETURNING tag_id, user_id, name`,
    [user_id, name]
  );
  return result.rows[0];
}

// Find all tags for a given user
export async function findTagsByUserId(user_id) {
  const result = await pool.query(
    `SELECT tag_id, user_id, name
     FROM tags
     WHERE user_id = $1
     ORDER BY tag_id ASC`,
    [user_id]
  );
  return result.rows;
}

// Find a single tag by its tag_id
export async function findTagByTagId(tag_id) {
  const result = await pool.query(
    `SELECT tag_id, user_id, name
     FROM tags
     WHERE tag_id = $1`,
    [tag_id]
  );
  return result.rows[0];
}

// Find all tags for a given task
export async function findTagsByTaskId(task_id) {
  const result = await pool.query(
    `SELECT t.tag_id, t.user_id, t.name
     FROM tags t
     INNER JOIN task_tags tt ON t.tag_id = tt.tag_id
     WHERE tt.task_id = $1
     ORDER BY t.tag_id ASC`,
    [task_id]
  );
  return result.rows;
}

// Update a tag
export async function updateTag(tag_id, { name }) {
  const result = await pool.query(
    `UPDATE tags
     SET name = $1
     WHERE tag_id = $2
     RETURNING tag_id, user_id, name`,
    [name, tag_id]
  );
  return result.rows[0];
}

// Delete a tag
export async function deleteTag(tag_id) {
  const result = await pool.query(
    `DELETE FROM tags
     WHERE tag_id = $1
     RETURNING tag_id`,
    [tag_id]
  );
  return result.rows[0];
}

// Add a tag to a task
export async function addTagToTask(task_id, tag_id) {
  const result = await pool.query(
    `INSERT INTO task_tags (task_id, tag_id)
     VALUES ($1, $2)
     ON CONFLICT DO NOTHING
     RETURNING task_id, tag_id`,
    [task_id, tag_id]
  );
  return result.rows[0];
}

// Remove a tag from a task
export async function removeTagFromTask(task_id, tag_id) {
  const result = await pool.query(
    `DELETE FROM task_tags
     WHERE task_id = $1 AND tag_id = $2
     RETURNING task_id, tag_id`,
    [task_id, tag_id]
  );
  return result.rows[0];
}
```

### Commit
``` bash
git add .
git commit -m 'Adds tag model'
```

Next:  
[Write tag validators](write-tag-validators.md)
