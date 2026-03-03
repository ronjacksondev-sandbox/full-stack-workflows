# Write task view routes

### Add `taskView.js`
``` bash
touch src/routes/taskView.js
```

### Write `taskView.js`
``` js
import { Router } from "express";

import {
  tasksListPage,
  newTaskPage,
  showTaskPage,
  editTaskPage
} from "../controllers/taskViewController.js";

const router = Router();

router.get("/", tasksListPage);
router.get("/new", newTaskPage);
router.get("/:id", showTaskPage);
router.get("/:id/edit", editTaskPage);

export default router;
```


### Mount task view router in `app.js`
``` js
import taskViewRouter from './routes/taskViews.js'
```
``` js
app.use('/tasks', requireAuth, taskViewRouter);
```

### Commit
``` bash
git add .
git commit -m 'Adds task view routes'
```

Next:  
[Write task views](write-task-views.md)