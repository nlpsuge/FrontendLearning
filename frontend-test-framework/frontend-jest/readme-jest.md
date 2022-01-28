# Doc
https://jestjs.io/zh-Hans/docs/getting-started

# Install jest
yarn add --dev jest
or
npm install --save-dev jest

# Test
yarn test 
or
npm run test

# Fix 'SyntaxError: Cannot use import statement outside a module' when using ES6 import syntax

https://stackoverflow.com/a/61809626

replacing "import" by "require":

``` JS
// import { parse } from 'node-html-parser';
parse = require('node-html-parser');
```
