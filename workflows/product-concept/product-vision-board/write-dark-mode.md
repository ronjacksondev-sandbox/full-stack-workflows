# Write Dark Mode

- Add toggle by query string
- Add toggle by button


## Add `script` and write `function` to load stylesheet based on query string 
Possible query string values:
- ?mode=light
- ?mode=dark

Note:
- Scripts are normally written in their own js file instead of the html file.
- They are added to the html file here simply to show the basic concept.

``` js
<script>
  const lightStylesheet = document.getElementById('lightStylesheet');
  const darkStylesheet = document.getElementById('darkStylesheet');

  function processQueryString() {
    const mode = new URLSearchParams(location.search).get('mode');
    if(mode === 'light') {
      lightStylesheet.disabled = false;
      darkStylesheet.disabled = true;
    } else if (mode === 'dark') {
      lightStylesheet.disabled = true;
      darkStylesheet.disabled = false;
    }
  }

  document.addEventListener('DOMContentLoaded', function() {
    processQueryString();
  });
</script>
```

## Test query string
Add `?mode=dark` to url and reload the page
Expectations:  Page should load the mode specified in the query string instead of default to light


## Write toggle `button` below `hr` elements
``` html
<nav>
  <button id="toggle-dark-mode">Toggle dark mode</button>
</nav>
```

## Write toggle `function` below `processQueryString`
``` js
  function toggleDarkMode() {
    lightStylesheet.disabled = !lightStylesheet.disabled;
    darkStylesheet.disabled = !darkStylesheet.disabled;
  }
```

## Add toggle `function` call to `DOMContentLoaded` event handler
``` js
    const toggleButton = document.getElementById('toggle-dark-mode');
    toggleButton.addEventListener('click', toggleDarkMode);
```

## Test dark mode toggle
- Expectation: button should switch between dark and light mode

## Git commit
``` bash
git add .
git commit -m 'Adds dark mode functionality'
```

Next:  
[Deploy Page](deploy-page.md)