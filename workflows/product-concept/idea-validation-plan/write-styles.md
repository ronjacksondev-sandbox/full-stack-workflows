# Write Styles


## Add `styles.css`
``` bash
touch css/styles.css
```

## Edit `index.html` and add `link` to `styles.css` after milligram css
``` html
<link rel="stylesheet" href="css/styles.css" />
```

## Write custom styles
- Customize buttons with branding colors
- Customize methods with card styling

``` css
button {
  background-color: green;
  border-color: orange;
}

.card {
  background-color: #f5f5f5;
  padding: 16px;
  border: 1px solid #ddd;
  border-radius: 8px;
  margin: 5% 20%;
  aspect-ratio: 1 / 1;
}
```

## Add container `div` with card class to `index.html`
```diff
 <section>
   <h2>Methods</h2>
   <div class="row">
     <div class="column">
+      <div class="card">
         <p>Concept testing</p>
+      </div>
     </div>
     <div class="column">
+      <div class="card">
         <p>Survey</p>
+      </div>
     </div>
     <div class="column">
+      <div class="card">
         <p>Interviews</p>
+      </div>
     </div>
   </div>
 </section>
```

## Test
``` bash
npm run start
```
- Expectation: multi column cards

## Commit
``` bash
git add .
git commit -m 'Adds styling'
```

Next:  
[Write Font Controls](write-font-controls.md)