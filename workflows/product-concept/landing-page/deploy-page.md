
## Add deploy workflow for GitHub pages
``` bash
mkdir -p .github/workflows
touch .github/workflows/deploy.yml
```

## Write workflow
``` yaml
name: Deploy static site

on:
  push:
    branches: [main]

permissions:
  contents: read
  pages: write
  id-token: write

jobs:
  deploy:
    runs-on: ubuntu-latest

    steps:
      - uses: actions/checkout@v4

      - name: Upload artifact
        uses: actions/upload-pages-artifact@v3
        with:
          path: .

      - name: Deploy to GitHub Pages
        uses: actions/deploy-pages@v4
```

## View live page on GitHub
> Go to GitHub repo > settings > pages > Your site is live at ...