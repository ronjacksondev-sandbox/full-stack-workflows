# Write Content Components

## Add `IngredientList.jsx`
``` bash
touch src/components/IngredientList.jsx
```
## Write `IngredientList.jsx`
``` js
export default function IngredientList({ items }) {
  return (
    <ul>
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  );
}
```

## Add `InstructionList.jsx`
``` bash
touch src/components/InstructionList.jsx
```
## Write `InstructionList.jsx`
``` js
export default function InstructionList({ steps }) {
  return (
    <ol>
      {steps.map((step, index) => (
        <li key={index}>{step}</li>
      ))}
    </ol>
  );
}
```

## Add `TipsList.jsx`
``` bash
touch src/components/TipsList.jsx
```
## Write `TipsList.jsx`
``` js
export default function TipsList({ items }) {
  return (
    <ul>
      {items.map((tip) => (
        <li key={tip}>{tip}</li>
      ))}
    </ul>
  );
}
```