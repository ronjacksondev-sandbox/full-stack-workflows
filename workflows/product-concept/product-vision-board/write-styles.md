# Write Styles

Integrate orange and green into the page design

# Add `hr` elements below the `main title`
```
<hr class="top-hr"/>
<hr class="bottom-hr"/>
```

# Add `hr` styles to the `head` element
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

## Git commit
``` bash
git add .
git commit -m 'Adds stylesheets and brand colors'
```

Next:  
[Write Dark Mode](write-dark-mode.md)