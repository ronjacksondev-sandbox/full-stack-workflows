# Setup Folders

### Create folders
``` bash
# Server Source code folder
mkdir src
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
mkdir views/pages
mkdir views/partials

# Move back out of src
cd ../
```

Next:  
[Setup Database](setup-database.md)
