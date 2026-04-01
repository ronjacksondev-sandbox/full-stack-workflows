# Add prism toolbar

- Adds prism toolbar and a copy to clipboard button.
- Install node package as an easy way to get the files locally and then copy them to public folder

### Generate prism files
``` bash
npm install prismjs
```

### Add passthrough copy in `eleventy.config.js` to default function
``` js
eleventyConfig.addPassthroughCopy({
  "node_modules/prismjs/prism.js": "js/prism.js",
  "node_modules/prismjs/plugins/toolbar/prism-toolbar.js": "js/prism-toolbar.js",
  "node_modules/prismjs/plugins/toolbar/prism-toolbar.css": "css/prism-toolbar.css",
  "node_modules/prismjs/plugins/copy-to-clipboard/prism-copy-to-clipboard.js": "js/prism-copy-to-clipboard.js"
});
```

### Add toolbar css to `head` in `base.html`
``` html
<link rel="stylesheet" href="/public/css/prism-toolbar.css">
```

### Add scripts right before closing `</body>`
``` html
<script src="/public/js/prism.js"></script>
<script src="/public/js/prism-toolbar.js"></script>
<script src="/public/js/prism-copy-to-clipboard.js"></script>
```

### View code snippets
``` bash
npm run serve
```
- Expectation is when hovering over the snippet that a copy button will appear

### Commit
``` bash
git add .
git commit -m 'Adds prism toolbar and copy button'
```

Next:  
[Add Copy Box](add-copy-box.md)
