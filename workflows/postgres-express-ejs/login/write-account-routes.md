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

### Mount in `app.js`
``` js
import accountRouter from './routes/account.js';
```
``` js
app.use('/account', accountRouter);
```

### Commit
``` bash
git add .
git commit -m 'Adds account routes'
```

Next:  
[Write auth views](write-auth-views.md)
