# Write auth controller

### Install bcrypt
``` bash
npm install bcrypt
```

### Create file
``` bash
touch src/controllers/authController.js
```

### Write auth controller
``` js
import { validateSignupInput, validateLoginInput } from '../validators/authValidators.js';
import { registerUser, authenticateUser } from '../services/authService.js';

function getSafeNextUrl(nextUrl) {
  if (typeof nextUrl !== 'string') return '/';
  if (!nextUrl.startsWith('/')) return '/';
  if (nextUrl.startsWith('//')) return '/';
  return nextUrl;
}

export function getSignupPage(req, res) {
  res.render('pages/signup', { title: 'Sign up', next: req.query.next });
}

export function getLoginPage(req, res) {
  res.render('pages/login', { title: 'Login', next: req.query.next });
}

export async function signup(req, res, next) {
  try {
    const validatedInput = validateSignupInput(req.body);

    const newUser = await registerUser(validatedInput);

    // Set session
    req.session.userId = newUser.user_id;
    req.session.userEmail = newUser.email;

    res.redirect(getSafeNextUrl(req.body.next));
  } catch (error) {
    next(error);
  }
}

export async function login(req, res, next) {
  try {
    const validatedInput = validateLoginInput(req.body);

    const user = await authenticateUser(validatedInput);

    // Set session
    req.session.userId = user.user_id;
    req.session.userEmail = user.email;

    res.redirect(getSafeNextUrl(req.body.next));
  } catch (error) {
    next(error);
  }
}

export function logout(req, res, next) {
  req.session.destroy((err) => {
    if (err) {
      return next(err);
    }

    res.clearCookie('connect.sid'); // Default session cookie name
    res.redirect('/');
  });
}

```

Next:  
[Write account controller](write-account-controller.md)