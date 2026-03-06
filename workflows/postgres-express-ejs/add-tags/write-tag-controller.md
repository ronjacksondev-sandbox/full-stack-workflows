# Write tag controller

### Add `tagController.js`
``` bash
touch src/controllers/tagController.js
```

### Write `tagController.js`
``` js
import {
  createTag,
  findTagsByUserId,
  findTagByTagId,
  updateTag,
  deleteTag,
  findTagsByTaskId,
  addTagToTask,
  removeTagFromTask
} from "../models/tag.js";

import {
  findTaskByTaskId
} from "../models/task.js";

import {
  validateCreateTag,
  validateUpdateTag,
  validateAddTagToTask,
  validateRemoveTagFromTask
} from "../validators/tagValidators.js";

// Helper function to check if client wants JSON
function wantsJson(req) {
  return req.accepts('json') && !req.accepts('html');
}

// GET /tags - List all tags or render tags page
export async function getTagsController(req, res) {
  const userId = res.locals.currentUser?.user_id;
  const tags = userId ? await findTagsByUserId(userId) : [];

  if (wantsJson(req)) {
    return res.json(tags);
  }

  res.render("pages/tags/index", {
    title: "Your Tags",
    user: res.locals.currentUser,
    tags: tags ?? []
  });
}

// GET /tags/new - Render new tag form
export function newTagPage(req, res) {
  res.render("pages/tags/new", {
    title: "Create Tag",
    user: res.locals.currentUser
  });
}

// POST /tags - Create a new tag
export async function createTagController(req, res) {
  const { valid, errors, data } = validateCreateTag(req.body);

  if (!valid) {
    if (wantsJson(req)) {
      return res.status(400).json({ errors });
    }
    return res.status(400).render("pages/tags/new", {
      title: "Create Tag",
      user: res.locals.currentUser,
      errors
    });
  }

  const tag = await createTag({
    user_id: res.locals.currentUser?.user_id,
    ...data
  });

  if (wantsJson(req)) {
    return res.status(201).json(tag);
  }

  res.redirect(`/tags/${tag.tag_id}`);
}

// GET /tags/:id - Show tag details or render tag page
export async function getTagByIdController(req, res) {
  const { id } = req.params;

  const tag = await findTagByTagId(id);

  if (!tag || tag.user_id !== res.locals.currentUser?.user_id) {
    if (wantsJson(req)) {
      return res.status(404).json({ error: "Tag not found" });
    }
    return res.status(404).render("pages/error", {
      message: "Tag not found"
    });
  }

  if (wantsJson(req)) {
    return res.json(tag);
  }

  res.render("pages/tags/show", {
    title: "Tag Details",
    user: res.locals.currentUser,
    tag: tag
  });
}

// GET /tags/:id/edit - Render edit tag form
export async function editTagPage(req, res) {
  const { id } = req.params;

  const tag = await findTagByTagId(id);

  if (!tag || tag.user_id !== res.locals.currentUser?.user_id) {
    return res.status(404).render("pages/error", {
      message: "Tag not found"
    });
  }

  res.render("pages/tags/edit", {
    title: "Edit Tag",
    user: res.locals.currentUser,
    tag: tag
  });
}

// PUT/PATCH /tags/:id - Update a tag
export async function updateTagController(req, res) {
  const { id } = req.params;

  const existing = await findTagByTagId(id);
  if (!existing || existing.user_id !== res.locals.currentUser?.user_id) {
    if (wantsJson(req)) {
      return res.status(404).json({ error: "Tag not found" });
    }
    return res.status(404).render("pages/error", {
      message: "Tag not found"
    });
  }

  const { valid, errors, data } = validateUpdateTag(req.body);
  if (!valid) {
    if (wantsJson(req)) {
      return res.status(400).json({ errors });
    }
    return res.status(400).render("pages/tags/edit", {
      title: "Edit Tag",
      user: res.locals.currentUser,
      tag: existing,
      errors
    });
  }

  const updated = await updateTag(id, data);

  if (wantsJson(req)) {
    return res.json(updated);
  }

  res.redirect(`/tags/${id}`);
}

// DELETE /tags/:id - Delete a tag
export async function deleteTagController(req, res) {
  const { id } = req.params;

  const existing = await findTagByTagId(id);
  if (!existing || existing.user_id !== res.locals.currentUser?.user_id) {
    if (wantsJson(req)) {
      return res.status(404).json({ error: "Tag not found" });
    }
    return res.status(404).render("pages/error", {
      message: "Tag not found"
    });
  }

  const deleted = await deleteTag(id);

  if (wantsJson(req)) {
    return res.json({ deleted });
  }

  res.redirect("/tags");
}

// POST /tasks/:taskId/tags/:tagId - Add a tag to a task
export async function addTagToTaskController(req, res) {
  const { taskId, tagId } = req.params;

  const { valid, errors, data } = validateAddTagToTask({
    task_id: parseInt(taskId),
    tag_id: parseInt(tagId)
  });

  if (!valid) {
    return res.status(400).json({ errors });
  }

  // Verify task belongs to current user
  const task = await findTaskByTaskId(taskId);
  if (!task || task.user_id !== res.locals.currentUser?.user_id) {
    return res.status(404).json({ error: "Task not found" });
  }

  // Verify tag belongs to current user
  const tag = await findTagByTagId(tagId);
  if (!tag || tag.user_id !== res.locals.currentUser?.user_id) {
    return res.status(404).json({ error: "Tag not found" });
  }

  const result = await addTagToTask(taskId, tagId);
  res.status(201).json(result);
}

// DELETE /tasks/:taskId/tags/:tagId - Remove a tag from a task
export async function removeTagFromTaskController(req, res) {
  const { taskId, tagId } = req.params;

  const { valid, errors } = validateRemoveTagFromTask({
    task_id: parseInt(taskId),
    tag_id: parseInt(tagId)
  });

  if (!valid) {
    return res.status(400).json({ errors });
  }

  // Verify task belongs to current user
  const task = await findTaskByTaskId(taskId);
  if (!task || task.user_id !== res.locals.currentUser?.user_id) {
    return res.status(404).json({ error: "Task not found" });
  }

  // Verify tag belongs to current user
  const tag = await findTagByTagId(tagId);
  if (!tag || tag.user_id !== res.locals.currentUser?.user_id) {
    return res.status(404).json({ error: "Tag not found" });
  }

  const result = await removeTagFromTask(taskId, tagId);
  res.json({ removed: result });
}

// GET /tasks/:taskId/tags - Get all tags for a task
export async function getTaskTagsController(req, res) {
  const { taskId } = req.params;

  // Verify task belongs to current user
  const task = await findTaskByTaskId(taskId);
  if (!task || task.user_id !== res.locals.currentUser?.user_id) {
    return res.status(404).json({ error: "Task not found" });
  }

  const tags = await findTagsByTaskId(taskId);
  res.json(tags);
}

```

### Commit
``` bash
git add .
git commit -m 'Adds tag controller'
```

Next:  
[Write tag routes](write-tag-routes.md)