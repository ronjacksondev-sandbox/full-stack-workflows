# Add Prism


### Add syntax highlighting with prism
``` bash
npm install @11ty/eleventy-plugin-syntaxhighlight --save-dev
```

### Add prism import to `eleventy.config.js`
``` js
import syntaxHighlight from '@11ty/eleventy-plugin-syntaxhighlight';
```

### Add prism as a plugin
``` js
eleventyConfig.addPlugin(syntaxHighlight);
```

### Add passthrough copy configuration for styles directory
- This will allow the files in the styles folder to get copied to the _site output folder
``` js
eleventyConfig.addPassthroughCopy("styles");
```

### Copy a prism css theme into styles folder
``` bash
mkdir -p styles
cp node_modules/prismjs/themes/prism-tomorrow.css styles/prism-tomorrow.css
```

### Add link tag to base layout
``` html
<link rel="stylesheet" href="/styles/prism-tomorrow.css">
```

### Test and click javascript link and view code snippet styling
``` bash
npm run serve
```

### Commit
``` bash
git add .
git commit -m 'Adds prism syntax highlighting'
git push
```

Next:  
[Setup Base Plugin](setup-base-plugin.md)