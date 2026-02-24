# Write account routes

### Add `account.js`
``` bash
touch src/routes/account.js
```

### Write `account.js`
``` js
import express from 'express';
import { getAccountPage } from '../controllers/accountController.js';
import { requireAuth } from '../middleware/requireAuth.js';

const accountRouter = express.Router();

accountRouter.get('/', requireAuth, getAccountPage);

export default accountRouter;
```

Next:  
[Write auth views](write-auth-views.md)
