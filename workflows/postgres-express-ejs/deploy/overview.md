# Deploy

- Deploy using render.com

### Create databse on render
> Projects > Overview > Create a Postgres databaes

### Fill out form

> **Instance name:** dodate-prod-postgres  
> **Database name:** dodate_prod_db  
> **Instance type:** Free (for testing)  

> Click > Create Database

### Setup express `app.js` to work with a proxy
- Add line just below `const app = express();`
``` js
app.set('trust proxy', 1);
```

### Setup render permission on GitHub
- If this is your first time connecting render to your github account then do this during web app setup
- If you have already connected a specific repo to render then go to GitHub and add permissions for this repo

### Create web service on render
> New > Web Service

### Fill out form
> **Source Code:** Choose repository from git provider  
> **Name:** \<use default\>  
> **Language:** Node  
> **Branch:** main  
> **Region:** \<use same as other services>  
> **Build Command:** npm install  
> **Start Command:** npm run migrate up && node src/server.js  
> **Instance Type:** Free  
> **Environment Variables:** \<add applicable variables>

> Click > Deploy Website