# Write tag routes

### Add `tag.js`
``` bash
touch src/routes/tag.js
```

### Write `tag.js`
``` js
import { Router } from "express";

import {
  getTagsController,
  newTagPage,
  createTagController,
  getTagByIdController,
  editTagPage,
  updateTagController,
  deleteTagController,
  addTagToTaskController,
  removeTagFromTaskController,
  getTaskTagsController
} from "../controllers/tagController.js";

const router = Router();

// Tag CRUD routes with content negotiation
router.get("/", getTagsController);
router.get("/new", newTagPage);
router.post("/", createTagController);

router.get("/:id", getTagByIdController);
router.get("/:id/edit", editTagPage);
router.put("/:id", updateTagController);
router.delete("/:id", deleteTagController);

// Task-tag relationship routes (API only)
// These are mounted at /tags but designed to work with task routes
router.post("/tasks/:taskId/tags/:tagId", addTagToTaskController);
router.delete("/tasks/:taskId/tags/:tagId", removeTagFromTaskController);
router.get("/tasks/:taskId/tags", getTaskTagsController);

export default router;
```

### Mount `tags.js` in `app.js`
``` js
import tagRouter from './routes/tag.js';
```
``` js
app.use('/tags', requireAuth, tagRouter);
```

### Commit
``` bash
git add .
git commit -m 'Adds tag routes`
```

Next:  
[Write tag views](write-tag-views.md)