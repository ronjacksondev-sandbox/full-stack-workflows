# Setup Eleventy

### Install Eleventy
``` bash
npm install @11ty/eleventy --save-dev
```

### Append Eleventy build folder to gitignore
``` bash
echo '' >> .gitignore
echo "# Eleventy build folder" >> .gitignore
echo "_site" >> .gitignore
```

### Add `index.md`
- Default page to serve for root path request '/'
- By convention eleventy looks for 'index'
``` bash
touch index.md
```

### Write `index.md`
``` markdown
# Hello markdown world!
Welcome to our home page!  
Checkout our code snippets!  
```

### Add `base.html`
- Markdown is transformed into html but the html needs a `body` tag etc.
``` bash
mkdir _includes
touch _includes/base.html
```

### Write `base.html`
- Each markdown html is inserted into `content`

``` html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width; initial-width=1.0">
  </head>
  <body>
    {{ content }}
  </body>
</html>
```


### Add Eleventy config file
``` bash
touch eleventy.config.js
```

### Write Eleventy configuration
- Configure global markdown files to be rendered inside the base layout.
- Configure template formats for markdown and html.
- Markdown files should not use a template format.
- HTML files should use the liquid template format.
- Eleventy should start searching for file input in root `.`
- Eleventy should output build files into `_site` directory
``` js

// Dynamic setup and plugins
export default async function(eleventyConfig) {
  eleventyConfig.addGlobalData("layout", "base.html");
};

// Static settings
export const config = {
  setTemplateFormats: ["md", "html"],
  markdownTemplateEngine: false,
  htmlTemplateEngine: "liquid",
  dir: {
    input: ".",
    output: "_site"
  }
};
```

### Add build and serve scripts to package.json
``` bash
npm pkg set scripts.build="eleventy"
npm pkg set scripts.serve="eleventy --serve"
```


### Test setup and view in browser
``` bash
npm run serve
```

### Commit
``` bash
git add .
git commit -m 'Adds eleventy setup'
git push
```

Next:  
[Add New Page](add-new-page.md)