# Write Tests

[Home](../../../index.md) > [Course](../../../course-outline.md) > Product Concept > [Landing Page](overview.md) > Write Tests


## Install test packages
``` bash
npm install --save-dev mocha chai jsdom
```

## Add `test` to scripts
``` bash
npm pkg set scripts.test="mocha"
```

## Add `test` folder
``` bash
mkdir test
```

## Add test file
``` bash
touch test/index.test.js
```

## Write test
``` js
import fs from "fs/promises";
import path from "path";
import { expect } from "chai";
import { JSDOM } from "jsdom";

const htmlPath = path.resolve(
  new URL("../index.html", import.meta.url).pathname,
);
const cssPath = path.resolve(
  new URL("../styles.css", import.meta.url).pathname,
);

let document;
let cssText;

before(async () => {
  const [html, css] = await Promise.all([
    fs.readFile(htmlPath, "utf-8"),
    fs.readFile(cssPath, "utf-8"),
  ]);

  const dom = new JSDOM(html);
  document = dom.window.document;
  cssText = css;
});

describe("Duo Budget landing page", () => {
  it("renders a hero section with Duo Budget branding and an email capture CTA", () => {
    const hero = document.querySelector(".hero");
    const heading = hero?.querySelector("h1");
    const emailInput = document.querySelector('input[type="email"]');
    const submitButton = document.querySelector('button[type="submit"]');

    expect(hero).to.exist;
    expect(heading?.textContent).to.include("Duo Budget");
    expect(emailInput).to.exist;
    expect(emailInput?.getAttribute("placeholder")).to.equal(
      "Enter your email",
    );
    expect(submitButton?.textContent).to.include("Join Newsletter");
  });

  it("uses Duo Budget brand colors in the stylesheet", () => {
    expect(cssText).to.include("--mint: #7bcfa9");
    expect(cssText).to.include("--apricot: #f6a85a");
    expect(cssText).to.include("--mint-dark: #63b892");
    expect(cssText).to.include(".feature h3");
  });

  it("applies basic aesthetic design with centered hero text and subtle feature cards", () => {
    const hero = document.querySelector(".hero");
    const feature = document.querySelector(".feature");

    expect(hero?.classList.contains("text-center")).to.be.true;
    expect(feature).to.exist;
    expect(cssText).to.match(/border-radius:\s*8px/);
    expect(cssText).to.match(/background:\s*var\(--off-white\)/);
  });
});

```

- Tests will fail currently but now we have them setup as our target to pass.

## Commit
``` bash
git add .
git commit -m 'Adds page tests'
```

| | |
| :--- | ---: |
| [< Previous: Setup Node](setup-node.md) | [Next: Write HTML >](write-html.md) |
| | |


