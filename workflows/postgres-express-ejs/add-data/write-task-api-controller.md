# Add task api controller

### Add `tasksApiController.js` file
``` bash
touch src/controllers/tasksApiController.js
```

### Write `tasksApiController.js`
``` js
import {
  createTask,
  findTasksByUserId,
  findTaskByTaskId,
  updateTask,
  deleteTask,
  completeTask
} from "../models/task.js";

import {
  validateCreateTask,
  validateUpdateTask,
  validateCompleteTask
} from "../validators/taskValidators.js";

// Create a new task
export async function createTaskController(req, res) {
  const { valid, errors, data } = validateCreateTask(req.body);

  if (!valid) {
    return res.status(400).json({ errors });
  }

  const task = await createTask({
    user_id: res.locals.currentUser?.user_id,
    ...data
  });

  res.status(201).json(task);
}

// Get tasks for a user (with optional ?completed=true/false)
export async function getTasksController(req, res) {
  const { completed } = req.query;

  let completedFilter;
  if (completed === "true") completedFilter = true;
  if (completed === "false") completedFilter = false;

  const tasks = await findTasksByUserId(res.locals.currentUser?.user_id, {
    completed: completedFilter
  });

  res.json(tasks);
}

// Get a single task by ID
export async function getTaskByIdController(req, res) {
  const { id } = req.params;

  const task = await findTaskByTaskId(id);

  if (!task || task.user_id !== res.locals.currentUser?.user_id) {
    return res.status(404).json({ error: "Task not found" });
  }

  res.json(task);
}

// Update a task
export async function updateTaskController(req, res) {
  const { id } = req.params;

  const existing = await findTaskByTaskId(id);
  if (!existing || existing.user_id !== res.locals.currentUser?.user_id) {
    return res.status(404).json({ error: "Task not found" });
  }

  const { valid, errors, data } = validateUpdateTask(req.body);
  if (!valid) {
    return res.status(400).json({ errors });
  }

  const updated = await updateTask(id, data);
  res.json(updated);
}

// Delete a task
export async function deleteTaskController(req, res) {
  const { id } = req.params;

  const existing = await findTaskByTaskId(id);
  if (!existing || existing.user_id !== res.locals.currentUser?.user_id) {
    return res.status(404).json({ error: "Task not found" });
  }

  const deleted = await deleteTask(id);
  res.json({ deleted });
}

// Mark a task as completed
export async function completeTaskController(req, res) {
  const { id } = req.params;

  const existing = await findTaskByTaskId(id);
  if (!existing || existing.user_id !== res.locals.currentUser?.user_id) {
    return res.status(404).json({ error: "Task not found" });
  }

  const { valid, errors } = validateCompleteTask(req.body);
  if (!valid) {
    return res.status(400).json({ errors });
  }

  const updated = await completeTask(id);
  res.json(updated);
}
```

### Commit
``` bash
git add .
git commit -m 'Adds task api controller'
```

Next:  
[Write task view controller](write-task-view-controller.md)