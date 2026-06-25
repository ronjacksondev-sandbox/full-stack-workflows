# Write HTML

[Home](../../../index.md) > [Course](../../../course-outline.md) > Product Concept > [Landing Page](overview.md) > Write HTML


## Add `index.html`
``` bash
touch index.html
```

## Write html boilerplate with Emmet
> ! [tab]

## Write html body
``` html
<section class="hero text-center">
  <h1>Duo Budget</h1>
  <p>Understand how your time and money work together.</p>
  <p>One set of categories. One clear picture of your life.</p>

  <form class="cta-form is-horizontal-align">
    <input
      type="email"
      name="email"
      placeholder="Enter your email"
      required
    />
    <button type="submit">Join Newsletter</button>
  </form>
</section>

<section class="container">
  <h2>Why Duo Budget?</h2>

  <div class="features row">
    <div class="feature col">
      <h3>Unified Categories</h3>
      <p>
        Track time and money using the same categories so you can finally
        see how your resources align.
      </p>
    </div>

    <div class="feature col">
      <h3>Simple Logging</h3>
      <p>
        Record time or expenses in seconds. No clutter, no complexity — just
        clarity.
      </p>
    </div>

    <div class="feature col">
      <h3>Insightful Summaries</h3>
      <p>
        See where your hours and dollars go each week. Spot patterns and
        make better decisions.
      </p>
    </div>
  </div>
</section>

<section class="value-prop text-center">
  <h2>Time and Money Are Connected</h2>
  <p>
    Most tools treat time and money as separate worlds. Duo Budget brings
    them together so you can understand the true cost of your habits,
    projects, and priorities.
  </p>
</section>

<section class="container">
  <div class="testimonial text-center">
    <p>
      “Many things can be said about time and money.
      <br />Disorganized doesn't have to be one of them.”
    </p>
    <div class="author">— Duo Budget Founder</div>
  </div>
</section>

<footer class="text-center">
  <p>&copy; Duo Budget</p>
</footer>

```

| | |
| :--- | ---: |
| [< Previous: Write Tests](write-tests.md) | [Next: Setup CSS Framework >](setup-css-framework.md) |
| | |


