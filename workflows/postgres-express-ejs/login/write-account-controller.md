# Write account controller

### Add `accountController.js`
``` bash
touch src/controllers/accountController.js
```

### Write `accountController.js`
``` js
import { findUserById } from '../models/user.js';

export async function getAccountPage(req, res, next) {
  try {
    if (!req.session?.userId) {
      return res.redirect('/auth/login');
    }

    const user = await findUserById(req.session.userId);
    if (!user) {
      return res.redirect('/auth/login');
    }

    res.render('pages/account', {
      title: 'Account',
      user,
    });
  } catch (error) {
    next(error);
  }
}
```

### Commit
``` bash
git add .
git commit -m 'Adds account controller'
```

Next:  
[Write auth routes](write-auth-routes.md)
