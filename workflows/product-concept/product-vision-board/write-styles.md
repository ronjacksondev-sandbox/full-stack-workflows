# Write Styles

[Home](../../../index.md) > [Course](../../../course-outline.md) > [Product Concept](../index.md) > [Product Vision Board](../product-vision-board/index.md) > Write Styles


Integrate orange and green into the page design

## Add `hr` elements below the `h1`
``` html
<hr class="top-hr"/>
<hr class="bottom-hr"/>
```

## Add `hr` styles to the `head` element
- Styles are normally written in their own css file instead of the html file.
- They are added to the html file here simply to show the basic concept.

``` html
<style>
  .top-hr {
    height: 2px;
    background-color: orange;
  }
  .bottom-hr {
    height: 2px;
    background-color: green;
  }
</style>
```

## View page in browser
``` bash
npm run start
```

## Git commit
``` bash
git add .
git commit -m 'Adds brand colors'
```

| | |
| :--- | ---: |
| [< Previous: Setup CSS Framework](setup-css-framework.md) | [Next: Write Dark Mode >](write-dark-mode.md) |
| | |
