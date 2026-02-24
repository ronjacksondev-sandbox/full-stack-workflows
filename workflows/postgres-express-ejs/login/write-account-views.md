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