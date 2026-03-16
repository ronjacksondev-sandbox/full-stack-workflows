# Write Page Component

## Add `RecipePage.jsx`
``` bash
mkdir src/components
touch src/components/RecipePage.jsx
```

## Write `RecipePage.jsx`
``` js
import RecipeHeader from './RecipeHeader.jsx';
import RecipeSection from './RecipeSection.jsx';
import IngredientList from './IngredientList.jsx';
import InstructionList from './InstructionList.jsx';
import TipsList from './TipsList.jsx';
import recipe from '../data/recipe.js';

export default function RecipePage() {

  return (
    <main>
      <RecipeHeader
        title={recipe.title}
        tagline={recipe.tagline}
        servings={recipe.servings}
        prepTime={recipe.prepTime}
        cookTime={recipe.cookTime}
      />

      <RecipeSection title="Description">
        <p>{recipe.description}</p>
      </RecipeSection>

      <RecipeSection title="Ingredients">
        <IngredientList items={recipe.ingredients} />
      </RecipeSection>

      <RecipeSection title="Instructions">
        <InstructionList steps={recipe.instructions} />
      </RecipeSection>

      <RecipeSection title="Tips &amp; Notes">
        <TipsList items={recipe.tips} />
      </RecipeSection>
    </main>
  );
}

```
