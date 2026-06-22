# Write Tests

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
  assert.ok(header.querySelector("h1"), "<header> does not contain <h1>");
});

test("HTML <hr> color checks", () => {
  const hrs = Array.from(document.querySelectorAll("hr"));
  assert.ok(hrs.length >= 2, "Missing <hr> elements");

  const hasOrange = hrs.some((hr) => hr.style.color === "orange" || hr.getAttribute("style")?.includes("color: orange"));
  const hasGreen = hrs.some((hr) => hr.style.color === "green" || hr.getAttribute("style")?.includes("color: green"));

  assert.ok(hasOrange, "Missing <hr> with orange color");
  assert.ok(hasGreen, "Missing <hr> with green color");
});
```

## Run Tests
``` bash
node --test
```
- Expectations:
    - First test will pass.
    - Second and third tests will fail.

Next:  
[Write HTML body](write-html-body.md)  

