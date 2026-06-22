# Write Styles

Integrate orange and green into the page design

## Add `hr` elements below the `main title`
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

## Run tests
``` bash
node --test
```

- Expectations: All tests should pass

## View page in browser
``` bash
npm run start
```

## Git commit
``` bash
git add .
git commit -m 'Adds brand colors'
```

Next:  
[Write Dark Mode](write-dark-mode.md)