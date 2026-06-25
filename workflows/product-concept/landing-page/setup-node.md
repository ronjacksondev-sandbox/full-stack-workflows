# Setup Node

[Home](../../../index.md) > [Course](../../../course-outline.md) > Product Concept > [Landing Page](overview.md) > Setup Node


## Initialize Node (package.json)
``` bash
npm init -y --init-type=module
```
- y = yes to all prompt defaults
- module = use esm instead of commonjs

## Setup `live-server`
``` bash
npm install --save-dev live-server
```
- save-dev = set as development only dependency

## Add `start` to scripts
``` bash
npm pkg set scripts.start="live-server . --host=localhost --port=0"
```

## Commit
``` bash
git add .
git commit -m 'Adds node infrastructure'
```


| | |
| :--- | ---: |
| [< Previous: Setup Git](setup-git.md) | [Next: Write Tests >](write-tests.md) |
| | |

