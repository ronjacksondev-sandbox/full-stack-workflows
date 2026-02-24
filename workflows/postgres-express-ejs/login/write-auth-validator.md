# Write Auth Validator

### Add `authValidators.js`
```bash
touch src/validators/authValidators.js
```

### Write `authValidators.js`
``` js
export function validateSignupInput({ name, email, password }) {
  if (!name || !email || !password) {
    const err = new Error('Name, email, and password are required');
    err.status = 400;
    throw err;
  }

  if (password.length < 8) {
    const err = new Error('Password must be at least 8 characters');
    err.status = 400;
    throw err;
  }

  return { name, email, password };
}

export function validateLoginInput({ email, password }) {
  if (!email || !password) {
    const err = new Error('Email and password are required');
    err.status = 400;
    throw err;
  }

  return { email, password };
}

```

Next:  
[Write Auth Service](write-auth-service.md)