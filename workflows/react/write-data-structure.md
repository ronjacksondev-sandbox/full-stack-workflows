# Write Data Structure

### Add data file `recipe.js`
``` bash
mkdir src/data
touch src/data/recipe.js
```

### Write data file `recipe.js`
``` js
const recipe = {
  title: 'Cozy Blueberry Pie',
  tagline: 'A rustic, no-fuss blueberry pie with a buttery crust and jammy filling.',
  description:
    'This cozy blueberry pie leans on simple pantry ingredients and a straightforward method, so you can focus on the smell of butter and berries in the oven instead of fussy techniques. The crust is tender but sturdy enough to slice, and the filling bakes up thick, glossy, and just sweet enough for a scoop of vanilla ice cream on top.',
  servings: 8,
  prepTime: '25 min (plus chilling)',
  cookTime: '45–55 min',
  ingredients: [
    '2 1/2 cups all-purpose flour',
    '1 teaspoon fine sea salt',
    '2 tablespoons granulated sugar',
    '1 cup (2 sticks) cold unsalted butter, cubed',
    '1/2 to 3/4 cup ice-cold water',
    '5 cups fresh or frozen blueberries',
    '3/4 cup granulated sugar',
    '2 tablespoons brown sugar, packed',
    '3 tablespoons cornstarch',
    '1 tablespoon lemon juice',
    '1 teaspoon lemon zest',
    '1/2 teaspoon ground cinnamon (optional)',
    '1 teaspoon vanilla extract (optional)',
    '1 large egg, beaten (for egg wash)',
    '1 tablespoon coarse sugar, for sprinkling (optional)',
  ],
  instructions: [
    'Make the dough: In a large bowl, whisk together the flour, salt, and sugar. Cut in the cold butter with your fingers or a pastry cutter until you have pea-sized bits of butter throughout.',
    'Add 1/2 cup of ice-cold water and gently toss until the dough just comes together, adding a tablespoon or two more water only if there are dry patches that won’t hold.',
    'Divide the dough into two discs, wrap each in plastic or a reusable wrap, and chill in the refrigerator for at least 1 hour (or up to 2 days).',
    'Prepare the filling: In another bowl, combine the blueberries, granulated sugar, brown sugar, cornstarch, lemon juice, lemon zest, cinnamon, and vanilla. Toss until the berries are evenly coated and set aside while you roll the dough.',
    'On a lightly floured surface, roll one disc of dough into a circle about 3 mm thick. Fit it into a 9-inch pie dish, letting the excess hang over the edges.',
    'Spoon the blueberry filling into the crust, leaving behind any large puddles of liquid at the bottom of the bowl if it looks very wet.',
    'Roll out the second disc of dough and either lay it on top as a full crust with a few slits cut in the center, or slice it into strips and weave a simple lattice on top.',
    'Trim any extreme excess dough, then fold the edges under and crimp them. Brush the top crust with beaten egg and sprinkle with coarse sugar if using.',
    'Bake at 400°F (200°C) for 20 minutes, then reduce the temperature to 350°F (175°C) and bake for another 25–35 minutes, until the crust is deeply golden and the filling is bubbling in the center.',
    'Let the pie cool on a rack for at least 2 hours so the filling can set before slicing.',
  ],
  tips: [
    'If using frozen blueberries, do not thaw them first; bake straight from frozen and add a few extra minutes to the bake time if needed.',
    'For a less-sweet pie, reduce the granulated sugar in the filling by 2–3 tablespoons.',
    'Place the pie dish on a foil-lined baking sheet to catch any drips while it bakes.',
    'The pie is done when the filling bubbles in the very center and the crust is a rich golden brown, not pale.',
    'Bake the pie earlier in the day if you can—cooling time makes slicing much cleaner.',
    'Serve slightly warm or at room temperature with vanilla ice cream or lightly sweetened whipped cream.',
  ],
};

export default recipe;

```