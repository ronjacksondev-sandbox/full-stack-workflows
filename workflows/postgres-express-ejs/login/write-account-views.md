# Write account views

### Add `account.ejs`
``` bash
touch src/views/pages/account.ejs
```

### Write `account.ejs`
``` html
<h1>Account profile</h1>

<p><strong>Name:</strong> <%= user.name %></p>
<p><strong>Email:</strong> <%= user.email %></p>

<div>
  <a href="auth/logout">Logout</a>
</div>
```

### Test
``` bash
npm run dev
```
- Signup page should be able to create new account
- Login page should be able to login user
- Account page should be able to show logged in user details

### Commit
``` bash
git add .
git commit -m 'Adds account views'
```

Next:  
[Next Section Add data](../add-data/overview.md)