# Add New Page

### Create new page `basic-javascript.md`
``` bash
touch basic-javascript.md
```

### Write `basic-javascript.md`
```` markdown
# Basic Javascript

How to make an array
``` js
const arr = [1,2,3];
```

How to make an object
``` js
const obj = {
  name: "Bob",
  job: "comtroller"
};
```

[Return to Homepage](index.md)
````

### Add hyperlink to `index.md`
``` markdown
Links  
[Basic Javascript](basic-javascript.md)
```

### Test Site
``` bash
npm run serve
```
- Expectation is that page loads but link is broken
- Link is broken link because it goes to a .md file => basic-javascript.md
- Fix the link in the next step before making a commit

Next:  
[Setup URL Plugin](setup-url-plugin.md)