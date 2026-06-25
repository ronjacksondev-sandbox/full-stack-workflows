# Write CSS

[Home](../../../index.md) > [Course](../../../course-outline.md) > Product Concept > [Landing Page](overview.md) > Write CSS

## Write general page styles
- Set a page wide background
- Set padding on all the containers to add some whitespace
``` css
body {
  background: var(--light-gray);
}

.container {
  padding: 5rem 2.5rem;
}
```

## Style Hero Section
``` css
.hero {
  padding: 10rem 1rem;
  background: var(--off-white);
  border-bottom: 1px solid var(--gray);
}

.hero p {
  max-width: 600px;
  margin: 1rem auto;
}

.cta-form input {
  min-width: 250px;
  max-width: 500px;
  margin: 0 1rem;
}
```

## Style Feature section
``` css
.feature {
  background: var(--off-white);
  padding: 2rem;
  border-radius: 8px;
  border-top: 4px solid var(--apricot);
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.05);
}

.feature h3 {
  color: var(--apricot);
}
```

## Style Value Proposition Section
``` css
.value-prop {
  background: white;
  padding: 6rem 2rem;
}

.value-prop p {
  max-width: 600px;
  margin: 2rem auto;
}
```

## Style testimonial section
``` css
.testimonial {
  background: var(--off-white);
  padding: 5rem 1.5rem;
  border-radius: 8px;
  box-shadow: 0 5px 6px rgba(0, 0, 0, 0.05);
}

.author {
  font-weight: 600;
  color: var(--mint-dark);
}
```

## Style footer section
``` css
footer {
  padding: 3rem 1.5rem;
}
```



| | |
| :--- | ---: |
| [< Previous: Setup CSS Framework](setup-css-framework.md) | [Next: Deploy Page >](deploy-page.md) |
| | |


