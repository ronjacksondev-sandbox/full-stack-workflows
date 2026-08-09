# Deploy Page

[Home](../../../index.md) > [Course](../../../course-outline.md) > [Product Concept](../index.md) > [Product Vision Board](../product-vision-board/index.md) > Deploy Page


## Activate GitHub Pages on GitHub.com repo

>[Repository] > Settings > Pages > Build and Deployment > Source > GitHub Actions

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
      - name: Checkout repository
        uses: actions/checkout@v4

      - name: Download W3C validator
        run: |
          mkdir vnu
          curl -L https://github.com/validator/validator/releases/latest/download/vnu.jar -o vnu/vnu.jar

      - name: Run W3C validation
        run: |
          java -jar vnu/vnu.jar --errors-only *.html

      - name: Upload artifact
        uses: actions/upload-pages-artifact@v3
        with:
          path: .

      - name: Deploy to GitHub Pages
        uses: actions/deploy-pages@v4
```

## Git commit and push
``` bash
git add .
git commit -m 'Adds deploy workflow'
git push
```

## View live page on GitHub
> Find link on GitHub repo > settings > pages > Your site is live at ...


Product Vision Board is Finished.

| | |
| :--- | ---: |
| [< Previous: Write Tests](write-tests.md) | [Back to: Product Vision Board >](../product-vision-board/index.md) |
| | |
