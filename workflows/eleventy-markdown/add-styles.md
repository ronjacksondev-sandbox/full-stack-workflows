# Add Styles

### Add classless css framework
``` html
<!-- base.html Head node-->

<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/water.css@2/out/water.css">
```

### Add syntax highlighting with prism
``` bash
npm install @11ty/eleventy-plugin-syntaxhighlight
```

### Add prism to config file
``` js
eleventyConfig.addPlugin(syntaxHighlight);
```

### Add prism css theme to base.html
``` html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/prismjs/themes/prism-tomorrow.css">

```

### Test and view in browser
``` bash
npm run serve
```

Next:  
[Add Links](add-links.md)