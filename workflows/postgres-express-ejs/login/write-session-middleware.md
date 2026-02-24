# Write session middleware

### Install session middleware and session store

- Install express-session
- Manages functionality for session cookies
- Adds a `session` property to the `req` object
- Adding a value to `session` property triggers express-session to generate cookie

- Install connect-pg-simple
- Create a store in postgres

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
import session from 'express-session';
import connectPgSimple from 'connect-pg-simple';
import pool from '../db/index.js';

const PgSession = connectPgSimple(session);

export const sessionMiddleware = session({
  store: new PgSession({
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
```


### Mount middleware in `app.js`
``` js
import { sessionMiddleware } from './middleware/session.js';
```
`// Put app.use() before routes`
``` js
app.use(sessionMiddleware);
```

Next:  
[Write auth middleware](write-auth-middleware.md)