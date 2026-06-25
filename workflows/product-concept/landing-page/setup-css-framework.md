# Setup CSS Framework

[Home](../../../index.md) > [Course](../../../course-outline.md) > Product Concept > [Landing Page](overview.md) > Setup CSS Framework

- Setup chota css framework

## Add cdn link
``` html
  <link rel="stylesheet" href="https://unpkg.com/chota@latest" />
```

## Add `styles.css`
``` bash
touch styles.css
```

## Write variable overrides in `styles.css`
- This will override the chota --color-primary variable
- The other variables will be used later
``` css
:root {
  --mint: #7bcfa9;
  --mint-dark: #63b892;
  --apricot: #f6a85a;
  --off-white: #fffdf9;
  --gray: #e5e5e5;
  --light-gray: #fafafa;

  --color-primary: var(--mint);
}
```


| | |
| :--- | ---: |
| [< Previous: Write HTML](write-html.md) | [Next: Write CSS >](write-css.md) |
| | |

