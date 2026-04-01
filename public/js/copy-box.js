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