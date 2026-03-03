# Add prism toolbar

- Adds prism toolbar and a copy to clipboard button.

### Generate prism files
``` bash
npm install prismjs
```

### Add passthrough copy in `eleventy.config.js`
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
<link rel="stylesheet" href="/css/prism-toolbar.css">
```

### Add scripts right before closing `</body>`
- Set prism to manual mode since we are rendering server side
``` html
<script src="/js/prism.js"></script>
<script src="/js/prism-toolbar.js"></script>
<script src="/js/prism-copy-to-clipboard.js"></script>
```

Next:  
[Setup Base Plugin](setup-base-plugin.md)