# Write auth middleware

### Add `requireAuth.js`
``` bash
touch src/middleware/requireAuth.js
```

### Write `requireAuth.js`
``` js
export default function requireAuth(req, res, next) {
  if (req.session?.userId) return next();

  const nextUrl = encodeURIComponent(req.originalUrl || '/');
  return res.redirect(`/auth/login?next=${nextUrl}`);
}
```

### Commit
``` bash
git add .
git commit -m 'Adds auth middleware
```

Next:  
[Write auth validator](write-auth-validator.md)