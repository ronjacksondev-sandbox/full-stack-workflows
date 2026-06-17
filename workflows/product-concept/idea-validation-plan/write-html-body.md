# Write HTML


## Write `body`
- Use milligram classes to construct multi-column layout
- container > row > column 

``` html
  <header class="container">
    <h1>Duo Budget – Idea Validation Plan</h1>
  </header>

  <main class="container">
    <section>
      <h2>Purpose</h2>
      <p>
        Decide: <em>“Should we build anything at all?”</em>
      </p>
    </section>

    <section>
      <h2>Methods</h2>
      <div class="row">
        <div class="column">
          <p>Concept testing</p>
        </div>
        <div class="column">
          <p>Survey</p>
        </div>
        <div class="column">
          <p>Interviews:</p>
        </div>
      </div>
    </section>

    <section>
      <h2>Participants</h2>
      <div class="row">
        <div class="column">
          <h3>Target participants</h3>
          <ul>
            <li>People who track money.</li>
            <li>People who track time.</li>
          </ul>
        </div>
        <div class="column">
          <h3>Excluded participants</h3>
          <ul>
            <li>People who do not track time or money.</li>
            <li>People uninterested in planning or self-management.</li>
          </ul>
        </div>
      </div>
    </section>

  </main>

  <footer class="container">
    <p>&copy; Duo Budget</p>
  </footer>
```

## Test Page
``` bash
npm run start
```
- Expection is a working html page

## Commit
``` bash
git add .
git commit -m 'Adds main content and layout'
```

Next:  
[Write styles](write-styles.md)