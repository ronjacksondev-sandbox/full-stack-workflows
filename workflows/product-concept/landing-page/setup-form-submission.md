# Setup Form Submission

[Home](../../../index.md) > [Course](../../../course-outline.md) > Product Concept > [Landing Page](overview.md) > Setup Form Submission

## Go to Netlify Dashboard to Enable Forms in Netlify
> Forms > Enable Form Detection


## Setup CTA form with Netlify Forms integration
- Add the method attribute and the data- attribute
``` html
<form name="newsletter" method="POST" data-netlify="true" data-netlify-honeypot="bot-field">
```

## Commit and Push
``` bash
git add .
git commit -m 'Adds netlify form attributes'
git push
```

## Test form submission
> Go to page and submit an email

## Check submission
- Go to netlify dashboard => forms

| | |
| :--- | ---: |
| [< Previous: Setup Site Metrics](setup-site-metrics.md) | Setup Form Submission |
| | |

