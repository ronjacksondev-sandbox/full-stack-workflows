# Write auth routes

### Create authRoutes files
``` bash
touch src/routes/authRoutes.js
```

### Write authRoutes
``` js
import express from 'express';
import { getSignupPage, getLoginPage, signup, login, logout } from '../controllers/authController.js';

const authRouter = express.Router();

authRouter.get('/signup', getSignupPage);
authRouter.get('/login', getLoginPage);
authRouter.post('/signup', signup);
authRouter.post('/login', login);
authRouter.post('/logout', logout);

export default authRouter;

```

### Mount authRoutes in `app.js`
``` js
import authRouter from './routes/auth.js';
```
``` js
app.use('/auth', authRouter);
```

Next:  
[Write account routes](write-account-routes.md)
