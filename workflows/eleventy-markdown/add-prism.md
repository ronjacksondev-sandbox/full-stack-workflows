# Add Prism


### Add syntax highlighting with prism
``` bash
npm install @11ty/eleventy-plugin-syntaxhighlight --save-dev
```

### Add prism import to `eleventy.config.js`
``` js
import syntaxHighlight from '@11ty/eleventy-plugin-syntaxhighlight';
```

### Add prism as a plugin on `eleventy.config.js` in default function
``` js
eleventyConfig.addPlugin(syntaxHighlight);
```

### Create a `public` and `css` folders for local files
``` bash
mkdir public public/css
```

### Copy a prism css theme into css folder
``` bash
cp node_modules/prismjs/themes/prism-tomorrow.css public/css/prism-tomorrow.css
```

### Add passthrough copy configuration for styles directory
- This will allow the files in the styles folder to get copied to the _site output folder
``` js
eleventyConfig.addPassthroughCopy("public");
```

### Add link tag to base layout
``` html
<link rel="stylesheet" href="/public/css/prism-tomorrow.css">
```

### Test and click javascript link and view code snippet styling
``` bash
npm run serve
```
- Expectation is `basic-javascript` code snippets will now have syntax highlighting


### Commit
``` bash
git add .
git commit -m 'Adds prism syntax highlighting'
git push
```

Next:  
[Add Prism toolbar](add-prism-toolbar.md)
