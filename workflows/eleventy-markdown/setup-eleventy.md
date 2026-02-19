# Setup Eleventy

### Install Eleventy
``` bash
npm install @11ty/eleventy --save-dev
```

### Append Eleventy build folder to gitignore
``` bash
echo "# Eleventy build folder" >> .gitignore
echo "_site" >> .gitignore
```

### Add Eleventy config file
``` bash
touch eleventy.config.js
```

### Write Eleventy configuration
- Configure the input as the root directory
- Configure the output build files as the _site folder
- Configure dev server to run out of github repo directory with pathPrefix
- Configure markdown links to use relative base so links point to github repo directory
``` js
import { EleventyHtmlBasePlugin } from '@11ty/eleventy';

export default async function(eleventyConfig) {

  eleventyConfig.addPlugin (EleventyHtmlBasePlugin, {
    baseHref: "/full-stack-workflows/"
  });

  return {
    pathPrefix: "/full-stack-workflows/",
    dir: {
      input: ".",
      output: "_site"
    }
  };
}
```

### Add the root homepage entry file '/'
- By convention eleventy looks for 'index'
``` bash
touch index.md
```

### Add homepage content
```` markdown
# Welcome to the homepage
Check out our code
``` js
console.log('Hello markdown world');
```
````

### Add layout file to wrap markdown files
- Markdown is transformed into html but the html needs a `body` tag etc.
``` bash
mkdir _includes
touch _includes/base.html
```

### Write layout file
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

### Add configuration for layout
``` js
// eleventy.config.js

export default async function(eleventyConfig) {

  eleventyConfig.addGlobalData("layout", "base.html");

}
```

### Add build and serve scripts to package.json
``` bash
npm pkg set scripts.build="eleventy"
npm pkg set scripts.serve="eleventy --serve"
```


### Test setup and view in browser
``` bash
npm run build
npm run serve
```

Next:  
[Add Styles](add-styles.md)