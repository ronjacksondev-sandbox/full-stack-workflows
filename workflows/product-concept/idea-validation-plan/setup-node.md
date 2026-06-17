# Setup Node

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
git commit -m 'Adds node infrastructure'
```

Next:  
[Write HTML Boilerplate](write-html-boilerplate.md)
