# Write task api routes

### Add `taskApi.js`
``` bash
touch src/routes/taskApi.js
```

### Write `taskApi.js`
``` js
import { Router } from "express";

import {
  createTaskController,
  getTasksController,
  getTaskByIdController,
  updateTaskController,
  deleteTaskController,
  completeTaskController
} from "../controllers/taskApiController.js";

const router = Router();

router.get("/", getTasksController);
router.get("/:id", getTaskByIdController);
router.post("/", createTaskController);
router.put("/:id", updateTaskController);
router.delete("/:id", deleteTaskController);
router.patch("/:id/complete", completeTaskController);

export default router;
```

### Mount in `app.js`
``` js
import taskApiRouter from './routes/taskApi.js';
```
``` js
app.use('/api/tasks', requireAuth, taskApiRouter);
```

### Commit
``` bash
git add .
git commit -m 'Adds task api routes'
```

Next:  
[Write task view routes](write-task-view-routes.md)
