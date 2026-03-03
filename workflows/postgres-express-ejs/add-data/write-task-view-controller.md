# Write task view controller

### Add `taskViewController.js`
``` bash
touch src/controllers/taskViewController.js
```

### Write `taskViewController.js`
``` js
import { findTasksByUserId } from "../models/task.js";

// GET /tasks
export async function tasksListPage(req, res) {
  const userId = res.locals.currentUser?.user_id;
  const tasks = userId ? await findTasksByUserId(userId) : [];
  res.render("pages/tasks/index", {
    title: "Your Tasks",
    user: res.locals.currentUser,
    tasks: tasks ?? [],
  });
}

// GET /tasks/new
export function newTaskPage(req, res) {
  res.render("pages/tasks/new", {
    title: "Create Task",
    user: res.locals.currentUser,
  });
}

// GET /tasks/:id
export function showTaskPage(req, res) {
  res.render("pages/tasks/show", {
    title: "Task Details",
    user: res.locals.currentUser,
    taskId: req.params.id, // page JS will fetch /api/tasks/:id
  });
}

// GET /tasks/:id/edit
export function editTaskPage(req, res) {
  res.render("pages/tasks/edit", {
    title: "Edit Task",
    user: res.locals.currentUser,
    taskId: req.params.id,
  });
}
```

### Commit
``` bash
git add .
git commit -m 'Adds task view controller'
```

Next:  
[Write task api routes](write-task-api-routes.md)