# Setup CSS Framework

Add basic page styling with [Water CSS](https://watercss.kognise.dev/)  
Water CSS is a classless framework so styles are applied without adding any classes to your html.

## Write `link` elements in the `head`
- Stylesheets hosted on a content delivery network (CDN)
- Set the dark stylesheet as disabled so it only the light sheet is used by default

``` html
<link 
  id="lightStylesheet" 
  rel="stylesheet" 
  href="https://cdn.jsdelivr.net/npm/water.css@2/out/light.css">

<link 
  id="darkStylesheet" 
  rel="stylesheet" 
  href="https://cdn.jsdelivr.net/npm/water.css@2/out/dark.css" disabled>

```

Next:  
[Write Styles](write-styles.md)