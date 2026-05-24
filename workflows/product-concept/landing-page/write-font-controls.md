# Write Font Controls

## Add the font size control script
- Use JavaScript to update `document.body.style.fontSize`
- Wire each button to its function

```html
<script>
  function setSmallFontSize() {
    document.body.style.fontSize = '75%';
  }

  function setMediumFontSize() {
    document.body.style.fontSize = '100%';
  }

  function setLargeFontSize() {
    document.body.style.fontSize = '125%';
  }

  document.addEventListener('DOMContentLoaded', function() {
    const smallFontSizeButton = document.getElementById('setSmallFontSizeButton');
    smallFontSizeButton.addEventListener('click', setSmallFontSize);

    const mediumFontSizeButton = document.getElementById('setMediumFontSizeButton');
    mediumFontSizeButton.addEventListener('click', setMediumFontSize);

    const largeFontSizeButton = document.getElementById('setLargeFontSizeButton');
    largeFontSizeButton.addEventListener('click', setLargeFontSize);
  });
</script>
```

## Where to add this
- Place the script inside the page `<head>` or just before `</body>`

Next:
- Finish by previewing the page in the browser
- Commit your changes
