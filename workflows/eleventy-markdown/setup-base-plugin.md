# Setup HTML Base plugin

- Before we deploy to Github Pages, we need to configure our app to run in the github pages subdirectory.
- The subdirectory is the name of the repository.
- We can alter the `<a>` links to use this subdirectory with the eleventy HTML Base plugin.


### Import Html Base Plugin (add it to the other named import)
``` js
import { EleventyHtmlBasePlugin } from '@11ty/eleventy';
```

### Add plugin to `eleventy.config.js` to the default function
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
``` bash
npm run serve
```
Expectations
- pathPrefix adds repo name to the dev server root directory
- Base Plugin adds repo name to links
- If the dev server was left running you may need to close and reopen it



### Commit
``` bash
git add .
git commit -m 'Adds base directory config'
git push
```

Next  
[Setup Deployment](setup-deployment.md)