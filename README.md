# hi-bjorn

Implementation of a simple web component.

The component class is in src/hi-bjorn.js, and it it tested using web-test-runner.

`package.json::main == "index.js"`  which contains the export of the component class.

`./hi-bjorn.js` contains code the registers the component class as a 
custom element.

## Usage html

Install the package using npm or yarn.

```bash
    npm install hi-bjorn
```

### Then use it directly in your html:

```html
    <script type="module" src="node_modules/hi-bjorn/hi-bjorn.js"></script>
    ...
    Hello <hi-bjorn name="Usage"></hi-bjorn>
```

### Use it from index.js:


Install the package using npm or yarn.

```bash
    npm install hi-bjorn
```

index.js:
```javascript
    import { HiBjorn } from 'hi-bjorn';
    window.customElements.define('hi-bjorn', HiBjorn);
```

```html
    <script type="module" src="index.js"></script>
    ...
    Hello <hi-bjorn name="Usage"></hi-bjorn>
```
