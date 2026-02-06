# Setup Express

## Setup Express App

### Install Express

``` bash
npm install express
```

### Create the express app file
``` bash
touch app.js
```

### Move cursor focus to explorer sidebar
> Ctrl + Shift + E

### Open app.js
> Highlight > Enter


### Code the express app
``` js
// app.js

import express from 'express';
const app = express();
  

export default app;
```


### Enter port info to .env
``` env
# .env
PORT=3000
```
or  
``` bash
echo 'PORT=3000' >> ../.env
```

## Setup entry point

### Switch to VS Code terminal
> Ctrl + `

### Create entry point file
``` bash
touch server.js
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
npm pkg set main=server.js
```

Next:  
