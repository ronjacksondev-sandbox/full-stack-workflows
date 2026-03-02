# Write session middleware

### Install session middleware and session store

``` bash
npm install express-session
npm install connect-pg-simple
```

### Create env value for session secret to sign session cookie
``` bash
echo "SESSION_SECRET=$(openssl rand -hex 64)" >> .env
```

### Set environment value in env
``` bash
echo 'NODE_ENV=development' >> .env
```


### Create middleware file
``` bash
touch src/middleware/session.js
```


### Write session middleware
``` js
import expressSession from 'express-session';
import connectPgSimple from 'connect-pg-simple';
import pool from '../db/index.js';

const PgSessionStore = connectPgSimple(expressSession);

const sessionMiddleware = expressSession({
  store: new PgSessionStore({
    pool,
    tableName: 'session',
  }),
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: false,
  cookie: {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    maxAge: 1000 * 60 * 60 * 24 * 7, // 7 days
    sameSite: 'lax',
  },
});

export default sessionMiddleware;
```


### Mount middleware in `app.js`
``` js
import sessionMiddleware from './middleware/session.js';
```
- Put `app.use()` before routes
``` js
app.use(sessionMiddleware);
```

### Add `setCurrentUser.js` middleware
``` bash
touch src/middleware/setCurrentUser.js
```

### Write `setCurrentUser.js`
``` js
import { findUserById } from '../models/user.js';

export async function setCurrentUser(req, res, next) {
  res.locals.currentUser = null;

  if (!req.session?.userId) {
    return next();
  }

  try {
    const user = await findUserById(req.session.userId);
    if (user) {
      res.locals.currentUser = user;
      next();
    } else {
      req.session.destroy((err) => {
        if (err) {
          res.clearCookie('connect.sid');
          res.locals.currentUser = null;
          next();
        }
      });
    }
  } catch (error) {
    console.error("Middleware Error:", error);
    next(error);
  }
};
```

### Mount `setCurrentUser.js` in `app.js`
``` js
import setCurrentUser from './middleware/setCurrentUser.js';
```
- Place `app.use()` below session middleware
``` js
app.use(setCurrentUser);
```

### Commit
``` bash
git add .
git commit -m 'Adds session middleware'
```

Next:  
[Write auth middleware](write-auth-middleware.md)