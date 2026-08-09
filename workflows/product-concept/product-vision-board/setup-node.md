# Setup Node

[Home](../../../index.md) > [Course](../../../course-outline.md) > [Product Concept](../index.md) > [Product Vision Board](../product-vision-board/index.md) > Setup Node

## Initialize Node (package.json)
``` bash
npm init -y --init-type=module
```
- y = yes to all prompt defaults
- module = use esm instead of commonjs

## Setup `http-server`
``` bash
npm install --save-dev http-server
```
- save-dev = set as development only dependency

## Add `start` to scripts
``` bash
npm pkg set scripts.start="http-server . -a localhost -c-1"
```
- localhost = serve only on the localhost port
- c-1 = disable caching

## Commit
``` bash
git add .
git commit -m 'Adds node initialization'
```

| | |
| :--- | ---: |
| [< Previous: Setup Git](setup-git.md) | [Next: Write HTML Boilerplate >](write-html-boilerplate.md) |
| | |
