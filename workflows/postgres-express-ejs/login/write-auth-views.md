# Write Auth Views


### Add `signup.ejs`
``` bash
touch src/views/pages/signup.ejs
```

### Write `signup.ejs`
``` html
<h1>Sign up</h1>
<form action="/auth/signup" method="post">
  <input type="hidden" name="next" value="<%= next || '/' %>">
  <p>
    <label for="name">Name</label>
    <input id="name" name="name" type="text" required autocomplete="name">
  </p>
  <p>
    <label for="email">Email</label>
    <input id="email" name="email" type="email" required autocomplete="email">
  </p>
  <p>
    <label for="password">Password</label>
    <input id="password" name="password" type="password" required autocomplete="new-password" minlength="8">
  </p>
  <p>
    <button type="submit">Create account</button>
  </p>
</form>
```


### Add `login.ejs`
``` bash
touch src/views/pages/login.ejs
```

### Write `login.ejs`
``` html
<h1>Login</h1>
<form action="/auth/login" method="post">
  <input type="hidden" name="next" value="<%= next || '/' %>">
  <p>
    <label for="email">Email</label>
    <input id="email" name="email" type="email" required autocomplete="email">
  </p>
  <p>
    <label for="password">Password</label>
    <input id="password" name="password" type="password" required autocomplete="current-password">
  </p>
  <p>
    <button type="submit">Sign in</button>
  </p>
</form>
```

### Add auth to nav bar in `header.ejs`
``` html
<nav class="navbar-nav ms-auto">
  <% if (currentUser) { %>
    <a class="nav-link" href="/account">View profile</a>
  <% } else { %>
    <a class="nav-link" href="/auth/login">Login</a>
    <a class="nav-link" href="/auth/signup">Signup</a>
  <% } %>
</nav>
```

Next:  
[Write account views](write-account-views.md)