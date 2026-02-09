# Setup Middleware

1. Helmet
1. Morgan logging
1. CORS
1. Static assets
1. Body parsing
1. Error handling


## Helmet
- Adds request headers
### Instal helmet module
``` bash
npm install helmet
```

### Mount helmet middleware
``` js
// app.js
import helmet from 'helmet';

app.use(helmet());
```

## Morgan
- perform logging after helmet request headers
### Install morgan
``` bash
npm install morgan
```


### Write morgan middleware
``` js
// app.js
import morgan from 'morgan';

app.use(morgan('dev'));
```


## CORS
- Adds response headers

### Install CORS package
``` bash
npm install cors
```


### Mount cors middleware in app.js
``` js
// app.js
import cors from 'cors';

app.use(cors());
```

## Setup static assets

### Create public directory
- 'public' so named by convention
``` bash
mkdir public
```

### Configure static asset middleware
``` js
// app.js
app.use(express.static('public'));
```


## Body parsing

### Configure body parsing
``` js
// app.js
app.use(express.json());
app.use(express.urlencoded({extended: true}));
```

## Error Handling

### Write basic error handling
``` js
app.use((err, req, res, next) => {
  console.error(err.stack); // log the error
  res.status(500).json({ error: err.message || 'Internal Server Error' });
});
```

### Test
``` bash
node src/server.js
```

### Commit
``` bash
git add .
git commit -m 'Adds initial middleware'
```

Next:  
[Setup EJS](setup-ejs.md)

