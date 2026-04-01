# Add Copy Box

- Add a custom web component that can be used to add a copy to clipboard button for non-code content
- This will allow for some visual difference when providing code to be copied and plain text to be copied

<copy-box title="Example Title">Here is an example of the copy box</copy-box>

## Add `copy-box.js` file to public/js
``` bash
touch public/js/copy-box.js
```

## Write `copy-box.js`
`<template>`
- Create a static template element with style and markup  
- `<slot>` represents what ever content is nested inside our custom component (here it's some text)

`class CopyBox`
- Create a CopyBox JS class that extends HTMLElement  

`constructor()`
- Constructor calls super, enables shadow dom, constructs static elements

`<copy-box title="Example Title>`
- Copy-box will also allow a `title` attribute to be added to give the content a name
- Configure a static method to observe the `title` attribute
- Write a private method to use the value in the `title` attribute to update the `title` in the component  

`copyToClipboard()`
- Write the functionality to copy the content using the clipboard API

`connectedCallback()`
- A Lifecycle callback that runs everytime the element is inserted into the DOM
- Here in the process you can access the `title` attribute and update the UI
- Here you also add your click event

`attributeChangedCallback()`
- Runs whenever your attribute is observed changing
- In our case this will be unlikely but added just in case

`customElements.define()`
- Add your custom element to the browser registry
- Name must contain a dash to distinguish it from native elements

``` js
const template = document.createElement('template');
template.innerHTML = `
  <style>
    .wrapper {
      background: #f4f4f4; 
      border: 1px solid #ddd; 
      border-radius: 6px; 
    }
    .wrapper > div {
      padding: 8px 12px;
    }
    .toolbar { 
      display: flex; 
      align-items: center;
      border-bottom: 1px solid #ddd;
    }
    .title { 
      flex-grow: 1;
      font-weight: bold;
    }
    button { 
      background: #007bff;
      color: white;
      border: none; 
      padding: 5px 10px;
      border-radius: 4px;
      cursor: pointer;
    }
    button:hover { background: #0056b3; }

  </style>
  <div class="wrapper">
    <div class="toolbar">
      <div class="title"></div>
      <button>Copy</button>
    </div>
    <div class="content-area">
      <slot></slot>
    </div>
  </div>
`;

class CopyBox extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.append(template.content.cloneNode(true));
  }

  static get observedAttributes() {
    return ['title']
  }

  _updateTitle() {
    const title = this.getAttribute('title') || '';
    this.shadowRoot.querySelector('.title').textContent = title;
  }

  copyToClipboard() {
    const slot = this.shadowRoot.querySelector('slot');
    const nodes = slot.assignedNodes();
    const text = nodes.map(node => node.textContent).join('').trim();

    navigator.clipboard.writeText(text).then(() => {
      const btn = this.shadowRoot.querySelector('button');
      btn.textContent = 'Copied!';
      setTimeout(() => (btn.textContent = 'Copy'), 2000);
    });
  }

  connectedCallback() {
    this._updateTitle();
    this.shadowRoot.querySelector('button').onclick = () => this.copyToClipboard();
  }

  attributeChangedCallback() {
    this._updateTitle();
  }
}
customElements.define('copy-box', CopyBox);
```

## Add `copy-box.js` to `base.html`
``` html
<script src="/public/js/copy-box.js"></script>
```

## Add a `copy-box` component to `basic-javascript.md`
``` markdown
<copy-box title="Example title">This content is ready to be copied to clipboard</copy-box>
```

## Test page
``` bash
npm run serve
```
-Expectation is that copy box would appear with working copy button

## Commit
``` bash
git add .
git commit -m 'Adds copy-box component'
```

- Note this feature is introducing html alongside our markdown
- Eleventy works fine for the most part with these two things side by side
- But it can start blur the lines of what the content is

Next:  
[Setup Base Plugin](setup-base-plugin.md)
