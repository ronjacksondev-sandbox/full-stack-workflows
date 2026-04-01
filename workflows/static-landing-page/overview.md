# Static landing page

## Create remote repository
> GitHub > New Repository
> Copy link to remote repository

## Add directory
``` bash
mkdir landing-page
```

## Initialize git
``` bash
cd landing-page
git init
```

## Add git remote
``` bash
git remote add origin <remote-repo-link>
```

## Setup branch
``` bash
git branch -M main
```

## Setup initial commit
``` bash
git commit --allow-empty -m 'Initial commit'
```

## Push and set upstream repo
``` bash
git push --set-upstream origin main
```

## Add `index.html`
``` bash
touch index.html
```

## Write HTML

### Write page elements
`DOCTYPE`  

- html

`html`  

- lang="en"

### Write head elements

`head`  

`meta` (character set)    
- charset="utf-8"  

`meta` (page description)
- name="description"  
- content="Duo Budget helps you understand how your time and money work together using shared categories."



`title` 

<copy-box title="Content">Duo Budget – A Clear View of Your Time and Money</copy-box>

`viewport`  
- name="viewport"
- content="width=device-width, initial-scale=1.0"

### Write body elements

`body`  

#### Write header
`header`  

`h1`  

<copy-box title="Content">Duo Budget</copy-box>

`p`  

<copy-box title="Content">A clear view of your time and money in one place.</copy-box>

#### Write main section

`main`  

#### Write intro section

`section`
- aria-labelledby="section-intro"  

`h2`  
- id="section-intro"  

<copy-box title="Content">Time is Money</copy-box>

`p`

<copy-box title="Content">When time and money live in different apps, it’s hard to understand how they influence each other. Duo Budget connects them in one simple system.</copy-box>

#### Write features section
`section`
- aria-labelledby="section-features"  

`h2`  
- id="section-features"  

<copy-box title="Content">How Duo Budget helps</copy-box>

`ul` => `li`  
Give each feature name `strong` emphasis

<blockquote>
<ul>
<li><strong>Shared categories:</strong> Track hours and dollars using the same simple categories.</li>
<li><strong>Yearly projections:</strong> Plan your time and money with a forward-looking view.</li>
<li><strong>Unified dashboard:</strong> See where your resources go and what they support.</li>
</ul>
</blockquote>


#### Write audience section

`section`
- aria-labelledby="section-audience"  

`h2`
- id="section-audience"  

<copy-box title="Content">Can it help you?</copy-box>


`dl` => `dt` => `dd`

<blockquote>
  <dl>
    <dt>Are you busy?</dt>
    <dd>Find clarity without the extra effort.</dd>
    <dt>Are you a planner?</dt>
    <dd>Get a simple view of your time and money.</dd>
    <dt>Are you curious?</dt>
    <dd>See how your resources work together.</dd>
  </dl>
</blockquote>

#### Write approach section

`section`
- aria-labelledby="section-approach"  

`h2`  
- id="section-approach"  

<copy-box title="Content">A simple, incremental approach</copy-box>

`p`

<copy-box title="Content">Duo Budget is growing step by step, starting with the essentials and expanding as the vision evolves.</copy-box>

### Write footer
`footer`

`p`

<copy-box title="Content">&amp;copy; Duo Budget</copy-box>

## Preview
> Open files explorer from vs code terminal
``` bash
explorer .
```
> Double click index.html to open in browser (using file protocol => file:///)

## Commit
``` bash
git add .
git commit -m 'Adds index.html
```

## Add deploy workflow for GitHub pages
``` bash
mkdir -p .github/workflows
touch .github/workflows/deploy.yml
```

## Write workflow in nano buffer
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