# Setup HTML Base plugin

- Before we deploy to Github Pages, we need to configure our app to run in the github pages subdirectory.
- The subdirectory is the name of the repository.
- We can do this with the HTML Base plugin.


### Import Html Base Plugin
``` js
import { EleventyHtmlBasePlugin } from '@11ty/eleventy';
```

### Add plugin to `eleventy.config.js`
``` js
eleventyConfig.addPlugin (EleventyHtmlBasePlugin, {
  baseHref: "/<github-repo-name>/"
});
```
### Add pathPrefix property to the `config` object
``` js
pathPrefix: "/<github-repo-name>/"
```

### Test and see github repo name in url
- Base Plugin adds repo name to links
- pathPrefix adds repo name to the dev server root directory
``` bash
npm run serve
```

### Commit
``` bash
git add .
git commit -m 'Adds base directory config'
git push
```

Next  
[Setup Deployment](setup-deployment.md)