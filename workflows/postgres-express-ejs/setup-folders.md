# Setup Folders

### Setup root folders
``` bash
# Source code
mkdir src
# Static files
mkdir public
mkdir public/css
mkdir public/js
mkdir public/images
# Code tests
mkdir tests
```

### Setup sub folders
``` bash
# Move into src
cd src
# DB infrastructure
mkdir db
# SQL migrations or ORM migrations
mkdir db/migrations 
# Seed data
mkdir db/seeds
# DB queries/data access
mkdir models
# Validation logic
mkdir validation
# Cross cutting concerns
mkdir middleware
# Business logic
mkdir services
# Request pipeline
mkdir controllers
# Request config
mkdir routes
# View pages
mkdir views
mkdir views/layouts
mkdir views/partials

# Logging etc.
mkdir utils

```

Next:  
[Setup Database](setup-database.md)
