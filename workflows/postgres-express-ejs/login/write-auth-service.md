# Write Auth Service

### Install bcrypt
``` bash
npm install bcrypt
```


### Add `authService.js`
``` bash
touch src/services/authService.js
```

### Write `authService.js`
``` js
import bcrypt from 'bcrypt';
import * as users from '../models/user.js';

const SALT_ROUNDS = 10;

export async function registerUser({ name, email, password }) {
  const existingUser = await users.findUserByEmail(email);
  if (existingUser) {
    const err = new Error('Email already registered');
    err.status = 409;
    throw err;
  }

  const password_hash = await bcrypt.hash(password, SALT_ROUNDS);

  return users.createUser({
    name,
    email,
    password_hash,
  });
}

export async function authenticateUser({ email, password }) {
  const user = await users.findUserByEmailWithPassword(email);
  if (!user) {
    const err = new Error('Invalid email or password');
    err.status = 401;
    throw err;
  }

  const passwordMatch = await bcrypt.compare(password, user.password_hash);
  if (!passwordMatch) {
    const err = new Error('Invalid email or password');
    err.status = 401;
    throw err;
  }

  return user;
}

```

### Commit
``` bash
git add .
git commit -m 'Adds auth service'
```

Next:  
[Write auth controller](write-auth-controller.md)