# Pad Step

pad-step is a lightweight utility function written in TypeScript that formats strings using the padding function added in ES2017.

## Installation

You can install it via your preferred package manager:

```bash
# Using npm
npm install pad-step

# Using yarn
yarn add pad-step

# Using pnpm
pnpm add pad-step
```

use via script tag:

```html
<script src="https://pastebin.com/raw/HVne8TzP" type="text/javascript"></script>
<script>
  const output = ps("Item", 10, "Qty", 5);
  console.log(output);
</script>
```

## Usage

**`ps(...args: (string | number)[]): string | null`**

Generates a padded string using `(string, number)` pairs.

- string: The text to display.
- number:
  - Positive -> pad right (`padEnd`)
  - Negative -> pad left (`padStart`)
  - Zero     -> no padding

### Example:

```ts
import ps from 'pad-step';

const result = ps('Name', 10, 'Age', 5, 'Score', 7);
console.log(result);
// Output: "Name      Age  Score  "


const result = ps('Apple', -10, '100', 5);
console.log(result);
// Output: "     Apple100  "
```

**`psp(...args: (string | number)[]): void`**

Same as `ps`, but logs the output directly to the console.

### Example:

```ts
import { psp } from 'pad-step';

psp('Product', 15, 'Price', 10, 'Qty', 5);
// Output: "Product        Price     Qty  "
```

## Input Validation
- The function requires an even number of arguments.
- Each pair must be in the form `(string, number)`.
- Invalid input will return `null` and log and error.

### Invalid Example:

```ts
ps('Name', 10, 'Age');
// Error: Arguments must be in (string, number) pairs.

ps('Name', 'Ten');
// Error: Argument pair at index 0 must be (string, number).
```

## Compatibility

Since this function is written based on ES2017, please check if it is the correct browser version at https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/padStart

## License

MIT
