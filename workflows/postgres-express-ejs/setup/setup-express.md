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

### Code entry point
``` js
// server.js
import 'dotenv/config';
import app from './app.js';
const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port});
});
```

### Set entry point for 'main' in package.json
``` bash
npm pkg set main=src/server.js
```

### Test
``` bash
node src/server.js
```
- Close server with Ctrl + C

### Commit
``` bash
git add .
git commit -m 'Adds express setup'
```

Next:  
[Setup middleware](setup-middleware.md)