# Setup Express

### Install Express

``` bash
npm install express
```

### Create the express app file
``` bash
touch src/app.js
```
### Code `app.js`
``` js
import express from 'express';
const app = express();

export default app;
```

### Enter port info to .env
``` bash
echo '' >> ./.env
echo 'PORT=3000' >> ./.env
```

## Setup entry point

### Create entry point file
``` bash
touch src/server.js
```

### Code `server.js` entry point
``` js
import 'dotenv/config';
import app from './app.js';
const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port});
});
```

### Set package entry point as `server.js`
``` bash
npm pkg set main=src/server.js
```

### Test
``` bash
node src/server.js
```
- Expectation is no errors in console.
- Web app will not return html yet
- Close server with Ctrl + C

### Commit
``` bash
git add .
git commit -m 'Adds express setup'
```

Next:  
[Setup middleware](setup-middleware.md)