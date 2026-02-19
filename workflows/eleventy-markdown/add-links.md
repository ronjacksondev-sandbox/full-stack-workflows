# Add Links

### Add a new page to link to
``` bash
echo '# Basic Javascript' >> basic-javascript.md
```

### Add a link to this new page
- Open up index.md
``` markdown
## Links
[Basic Javascript](basic-javascript.md)
```

### Test Link
``` bash
npm run serve
```

### Add plugin to transform file paths to url paths
``` bash
npm install @11ty/eleventy-plugin-syntaxhighlight --save-dev
```

### Add configuration for plugin
``` js
// eleventy.config.js
import { InputPathToUrlTransformPlugin } from "@11ty/eleventy";
```

``` js
// eleventy.config.js
eleventyConfig.addPlugin(InputPathToUrlTransformPlugin);
```

### Test and view in browser
``` bash
npm run serve
```

Next:  
[Setup Deployment](setup-deployment.md)