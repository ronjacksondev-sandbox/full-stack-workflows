# Write HTML Main

## Add the main page sections
- Add intro
- Add features
- Add audience questions
- Add approach
- Add aside content

```html
<main>
  <section aria-labelledby="section-intro">
    <h2 id="section-intro">Time is Money</h2>
    <p>
      When time and money live in different apps, it’s hard to understand how they influence each other.
      Duo Budget connects them in one simple system.
    </p>
  </section>

  <section aria-labelledby="section-features">
    <h2 id="section-features">How Duo Budget helps</h2>
    <ul>
      <li>
        <strong>Shared categories:</strong>
        Track hours and dollars using the same simple categories.
      </li>
      <li>
        <strong>Yearly projections:</strong>
        Plan your time and money with a forward-looking view.
      </li>
      <li>
        <strong>Unified dashboard:</strong>
        See where your resources go and what they support.
      </li>
    </ul>
  </section>

  <section aria-labelledby="section-audience">
    <h2 id="section-audience">Can it help you?</h2>
    <dl>
      <dt>Are you busy?</dt>
      <dd>Find clarity without the extra effort.</dd>

      <dt>Are you a planner?</dt>
      <dd>Get a simple view of your time and money.</dd>

      <dt>Are you curious?</dt>
      <dd>See how your resources work together.</dd>
    </dl>
  </section>

  <section aria-labelledby="section-approach">
    <h2 id="section-approach">A simple, incremental approach</h2>
    <p>
      Duo Budget is growing step by step, starting with the essentials and expanding as the vision evolves.
    </p>
  </section>
</main>

<aside>
  <h2>Thoughts on Time and Money</h2>
  <p>Many things can be said about <a href="https://en.wikipedia.org/wiki/Time" target="_blank">Time</a> and <a href="https://en.wikipedia.org/wiki/Money" target="_blank">Money</a>.</p>
  <p>Disorganized doesn't have to be one of them.</p>
</aside>
```

Next:  
[Write Font Controls](write-font-controls.md)
