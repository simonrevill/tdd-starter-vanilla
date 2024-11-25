# TDD Starter Vanilla

A starter project for TDD with vanilla JavaScript, Jest and Stryker.

Source code is in the `src` directory.

Test code is in the `tests` directory.

The Jest config is set up so that `node_modules` and the `tests/test-utils` folder is ignored by the coverage reporter.

This project makes use of the `--experimental-vm-modules` flag to enable the use of ECMAScript modules like so:

```js
import { add } from "../src/add";
```

Instead of:

```js
const { add } = require("../src/add");
```

## Running the Jest test suite

You can run the tests in watch mode with the following command:

```
$ npm test
```

## Running the Stryker mutation test suite

You can run the mutation test suite with the following command:

```
$ npm run test:mutation
```

<strong>Tip:</strong> Use the vscode extension Live Server to serve the html files in the generated `coverage` and `reports` folders.
