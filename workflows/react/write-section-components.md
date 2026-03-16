# Section Components

## Add `RecipeHeader.jsx`
``` bash
touch src/components/RecipeHeader.jsx
```

## Write `RecipeHeader.jsx`
``` js
export default function RecipeHeader({
  title,
  tagline,
  servings,
  prepTime,
  cookTime,
}) {
  return (
    <header>
      <h1>{title}</h1>
      {tagline && <p>{tagline}</p>}
      <div>
        <small>
          Serves {servings} · Prep {prepTime} · Bake {cookTime}
        </small>
      </div>
    </header>
  );
}
```

## Add `RecipeSection.jsx`
``` js
export default function RecipeSection({ title, children }) {
  return (
    <section>
      <h2>{title}</h2>
      {children}
    </section>
  );
}
```