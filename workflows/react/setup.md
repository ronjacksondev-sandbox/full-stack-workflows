# Setup

### Initialize node
``` bash
mkdir my-recipes
cd my-recipes
npm init -y --init-type=module
```

### Add React
``` bash
npm install react
```

### Add React-DOM
``` bash
npm install react-dom
```

### Add vite 
``` bash
npm install -D vite 
```

### Add react plugin to vite
``` bash
npm install -D @vitejs/plugin-react
```


### Add scripts to package.json
``` js
"scripts": {
  "dev": "vite",
  "build": "vite build",
  "preview": "vite preview"
}
```

### Add `vite.config.js`
``` bash
touch vite.config.js
```

### Write `vite.config.js`
``` js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
})

```


