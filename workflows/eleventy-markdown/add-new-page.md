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
- Open Homepage
- Click Basic Javascript Link
- Note: the link is broken link because it goes to basic-javascript.md

Next:  
[Setup URL Plugin](setup-url-plugin.md)