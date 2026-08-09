# Write Tests

[Home](../../../index.md) > [Course](../../../course-outline.md) > [Product Concept](../index.md) > [Product Vision Board](../product-vision-board/index.md) > Write Tests


- Write some tests to verify our web page is doing what we want

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

test("HTML <head> checks", () => {
  const title = document.querySelector("head > title");
  assert.ok(title, "Missing <title> in <head>");
});

test("HTML <body> checks", () => {
  const header = document.querySelector("header");
  assert.ok(header, "Missing <header>");
});

```

## Run Tests
``` bash
node --test
```
- Expectation: Tests will pass

| | |
| :--- | ---: |
| [< Previous: Write Dark Mode](write-dark-mode.md) | [Next: Deploy Page >](deploy-page.md) |
| | |
