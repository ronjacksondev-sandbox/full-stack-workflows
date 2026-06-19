# Write Tests

## Install JSDOM
``` bash
npm install jsdom --save-dev
```

## Add test file
``` bash
touch index.test.js
```

## Write test file
``` js
import { readFileSync } from "node:fs";
import { JSDOM } from "jsdom";
import { test } from "node:test";
import assert from "node:assert/strict";

const html = readFileSync("./index.html", "utf8");
const dom = new JSDOM(html);
const document = dom.window.document;

test("HTML structure checks", () => {
  // head contains a title
  const title = document.querySelector("head > title");
  assert.ok(title, "Missing <title> in <head>");

  // header contains h1
  const header = document.querySelector("header");
  assert.ok(header, "Missing <header>");
  assert.ok(header.querySelector("h1"), "<header> does not contain <h1>");

});
```

## Run Tests
``` bash
node --test
```
- Expectation: First test will pass. Second test will fail.
- Second test will pass in the next step

Next:  
[Write HTML body](write-html-body.md)  

