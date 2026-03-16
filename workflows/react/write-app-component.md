# Write App

Write the main App component

### Add source code directory
``` bash
mkdir src
```

### Add App component `App.jsx`
``` bash
touch src/App.jsx
```

### Write `App.jsx`
``` js
export default function App() {
  return <h1>My Recipes!</h1>;
}
```

### Add React entry point
``` bash
touch src/main.jsx
```

### Write `main.jsx`
``` js
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
```

### Add the HTML entry point
- Vite treats index.html as the entry file
``` bash
touch index.html
```

### Write `index.html`
``` html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>My Recipes</title>
  </head>
  <body>
    <div id="root"></div>

    <script type="module" src="/src/main.jsx"></script>
  </body>
</html>
```

### Test page
- Page should be able to load with title at this point
``` bash
npm run dev
```
