# Write auth middleware

### Add `requireAuth.js`
``` bash
touch src/middleware/requireAuth.js
```

### Write `requireAuth.js`
``` js
export function requireAuth(req, res, next) {
  if (req.session?.userId) return next();

  const nextUrl = encodeURIComponent(req.originalUrl || '/');
  return res.redirect(`/auth/login?next=${nextUrl}`);
}
```

Next:  
[Write auth validator](write-auth-validator.md)