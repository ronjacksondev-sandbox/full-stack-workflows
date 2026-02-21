# Setup URL Plugin

- Because markdown uses file system paths, these links do not work when rendered as html.
- We can use the eleventy plugin InputPath to URL to convert file system links to URLs.

### Import plugin
``` js
import { InputPathToUrlTransformPlugin } from "@11ty/eleventy";
```

### Add plugin to `eleventy.config.js`
``` js
eleventyConfig.addPlugin(InputPathToUrlTransformPlugin);
```

### Test page and click link
- Links should work on dev server now
``` bash
npm run serve
```

### Commit
``` bash
git add .
git commit -m 'Adds url plugin`
git push
```


Next  
[Add Styles](add-styles.md)
