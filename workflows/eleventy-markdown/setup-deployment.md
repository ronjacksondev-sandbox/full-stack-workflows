# Setup deployment

### Create Github Actions workflow
``` bash
mkdir .github
mkdir .github/workflows
touch .github/workflows/deploy.yml
```

### Write deployment yaml script
``` yaml
name: Deploy Eleventy to GitHub Pages

on:
  push:
    branches: [ main ]
  workflow_dispatch:

permissions:
  contents: read
  pages: write
  id-token: write

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout repository
        uses: actions/checkout@v4

      - name: Setup Node
        uses: actions/setup-node@v4
        with:
          node-version: 20

      - name: Install dependencies
        run: npm install

      - name: Build Eleventy site
        run: npm run build

      - name: Upload artifact
        uses: actions/upload-pages-artifact@v3
        with:
          path: _site

  deploy:
    needs: build
    runs-on: ubuntu-latest
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    steps:
      - name: Deploy to GitHub Pages
        id: deployment
        uses: actions/deploy-pages@v4
```

### Configure Github Actions
> Go to repository > Settings > Pages > Build and Deployment > Source = Github Actions

### Commit and Push
``` bash
git add .
git commit -m 'Adds github pages config'
git push
```

### Add github pages link to about section and view site
> Github Repo > About sidebar > Settings > Website > Check - Use your Github Pages website
