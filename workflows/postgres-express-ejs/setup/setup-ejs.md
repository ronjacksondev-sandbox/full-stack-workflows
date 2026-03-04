# Setup EJS

### Install EJS
``` bash
npm install ejs
npm install express-ejs-layouts
```

### Add EJS as view engine in `app.js`
``` js
import expressLayouts from 'express-ejs-layouts';
```
- Add ejs setup after body parsing middleware
``` js
app.set('views', './src/views');
app.set('view engine', 'ejs');
app.use(expressLayouts);
```

### Create the header partial
``` bash
touch src/views/partials/header.ejs
```

### Write the header partial
``` html
<header class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container">
    <a class="navbar-brand" href="/">Do Date</a>
    <nav class="navbar-nav">
      <a class="nav-link" href="/tasks">View Tasks</a>
      <a class="nav-link" href="/tasks/new">Add Task</a>
    </nav>
  </div>
</header>
```

### Create the home page
``` bash
touch src/views/pages/index.ejs
```

### Write the home page content
``` html
<h1>Do Date</h1>
<p>Manage your tasks and do them on time!</p>
```

### Add bootsrap
``` bash
npm install bootsrap
```

### Copy bootstrap files
``` bash
mkdir -p public/css public/js && \
cp node_modules/bootstrap/dist/css/bootstrap.min.css public/css/ && \
cp node_modules/bootstrap/dist/css/bootstrap.min.css.map public/css/ && \
cp node_modules/bootstrap/dist/js/bootstrap.bundle.min.js public/js/ && \
cp node_modules/bootstrap/dist/js/bootstrap.bundle.min.js.map public/js/
```


### Create the layout file
- convention is to create a file called layout.ejs in the views root
``` bash
touch src/views/layout.ejs
```

### Write the layout file
- body is the name express-ejs-layouts uses to inject the view page into the layout
``` html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title><%= title %></title>
    <link href="css/bootstrap.min.css" rel="stylesheet">
    <script src="js/bootstrap.bundle.min.js"></script>
  </head>
  <body>
    <%- include("./partials/header") %>
    <main class="container my-4">
      <%- body %>
      <%- locals.script || '' %>
    </main>
  </body>
</html>
```
### Create the index controller
``` bash
touch src/controllers/index.js
```

### Write the controller
``` js
const getIndex = (req, res) => {
  res.render("pages/index", {title: "home"});
};

export default {
  getIndex,
};
```

### Create the index route
``` bash
touch src/routes/index.js
```

### Write the index route
``` js
import express from 'express';
import indexController from '../controllers/index.js';

const indexRouter = express.Router();

indexRouter.get('/', indexController.getIndex);

export default indexRouter;
```

### Mount the router in `app.js`
``` js
import indexRouter from './routes/index.js';
```
- Mount routes just above error middleware
``` js
app.use('/', indexRouter);
```

### Test
- Home page should load at this point
``` bash
npm run dev
```

### Commit
``` bash
git add .
git commit -m 'Adds view setup'
git push
```

Next:  
[Go to next section - Login Overview test](../login/overview.md)
