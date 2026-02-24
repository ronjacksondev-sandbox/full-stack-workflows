# Write user model

### Create user model file
``` bash
touch src/models/user.js
```

### Write user model file
``` js
import pool from '../db/index.js';

export async function createUser({ name, email, password_hash }) {
  const result = await pool.query(
    `INSERT INTO users (name, email, password_hash)
     VALUES ($1, $2, $3)
     RETURNING user_id, name, email, created_at`,
     [name, email, password_hash],
  );
  return result.rows[0];
}

export async function findUserById(userId) {
  const result = await pool.query(
    `SELECT user_id, name, email, created_at
     FROM users
     WHERE user_id = $1`,
     [userId],
  );
  return result.rows[0] || null;
}

export async function findUserByEmail(email) {
  const result = await pool.query(
    `SELECT user_id, name, email, password_hash, created_at
     FROM users
     WHERE email = $1`,
     [email],
  );
  return result.rows[0] || null;
}
```

Next:  
[Write session middleware](write-session-middleware.md)
