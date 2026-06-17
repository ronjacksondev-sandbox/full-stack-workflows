## Add the font size control script

## Add controls to `index.html` just below `h1`
``` html
<nav>
  <div>
    <span>Adjust Font Size:</span>
    <div>
      <button id="setSmallFontSizeButton">Small</button>
      <button id="setMediumFontSizeButton">Medium</button>
      <button id="setLargeFontSizeButton">Large</button>
    </div>
  </div>
</nav>
```

## Add js file
``` bash
mkdir js
touch js/font-controls.js
```

## Write font control scripts

- Use JavaScript to update `document.body.style.fontSize`
- Wire each button to its function

``` js
const defaultMilligramFont = '62.5%';
const smallFont = '50%';
const largeFont = '75%';

function setSmallFontSize() {
  document.documentElement.style.fontSize = smallFont;
}

function setMediumFontSize() {
  document.documentElement.style.fontSize = defaultMilligramFont;
}

function setLargeFontSize() {
  document.documentElement.style.fontSize = largeFont;
}

document.addEventListener('DOMContentLoaded', function() {
  const smallFontSizeButton = document.getElementById('setSmallFontSizeButton');
  smallFontSizeButton.addEventListener('click', setSmallFontSize);

  const mediumFontSizeButton = document.getElementById('setMediumFontSizeButton');
  mediumFontSizeButton.addEventListener('click', setMediumFontSize);

  const largeFontSizeButton = document.getElementById('setLargeFontSizeButton');
  largeFontSizeButton.addEventListener('click', setLargeFontSize);
});```

## Add `script` to `head` section
``` html
<script src="/js/font-controls.js" defer></script>
```

## Test
``` bash
npm run start
```
- Expectation: Page loads and font buttons adjust size

## Commit
``` bash
git add .
git commit -m 'Adds font controls'
```

Next:  
[Deploy page](deploy-page.md)