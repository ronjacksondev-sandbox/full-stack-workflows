# Login

1. [Write session migration](write-session-migration.md)
1. [Write user migration](write-user-migration.md)
1. [Write user model](write-user-model.md)
1. [Write session middleware](write-session-middleware.md)
1. [Write auth middleware](write-auth-middleware.md)
1. [Write auth validator](write-auth-validator.md)
1. [Write auth service](write-auth-service.md)
1. [Write auth controller](write-auth-controller.md)
1. [Write account controller](write-account-controller.md)
1. [Write auth routes](write-auth-routes.md)
1. [Write account routes](write-account-routes.md)
1. [Write auth views](write-auth-views.md)
1. [Write account views](write-account-views.md)


## Auth Flow
1. HTTP request hits express entry point
1. Global Middleware runs  
    - Payload parsed  
    `req.body.username`  
    `req.body.password`  
    - Session cookie parse attempted  
    `req.session = null`  
    - setCurrentUser attempted  
    `res.locals.currentUser = null`
1. Login Route handler runs  
    `app.post("/login", loginController);`
1. Credentials extracted  
    `const { username, password } = req.body;`
1. Lookup user in database  
    `const user = await db.find(username);`  
1. Verify password  
    `const isValid = await bcrypt.compare(password, user.passwordHash);`  
1. Authentication success
1. User data stored in session table  
    `req.session.userId = user.userId;`  
1. Session cookie generated
1. Response sent with session cookie  
    `res.redirect("/account");`  
1. Next request happens  
    `GET /account`  
    Session cookie automatically sent
1. HTTP request hits express entry point (starting over)  
1. Global middleware runs
    - Payload parsed if any  
    - Session cookie parsed  
    `req.session = {userId: 123}`  
    - setCurrentUser  
    `res.locals.currentUser = db.find(userId)`
1. Route handlers run now with access to `currentUser`


