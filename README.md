# tocase

Convert a string from one case (camel, pascal, snake, kebab) to another case (camel, pascal, snake, kebab, capital, space, dot) with ease.

## Installation

With npm
```
npm install @fougassum/tocase
```

With yarn
```
yarn add @fougassum/tocase
```

With bun
```
bun install @fougassum/tocase
```

## Basic example

```
install toCase from '@fougassum/tocase'

const snakeStr = 'to_case_test_string';

const camelStr = toCase(snakeStr, 'camel');
console.log(camelStr) // "toCaseTestString"

const uppercaseKebabStr = toCase(snakeStr, 'uppercaseKebab');
console.log(uppercaseKebabStr) // "TO-CASE-TEST-STRING"
```

## Supported cases

You can currently convert strings from those cases :

- Camel case (camelCase)
- Pascal case (PascalCase)
- Snake case (snake_case)
- Kebab case (kebab-cace)

To those cases :

- 'camel' : Camel case (camelCase)
- 'pascal' : Pascal case (PascalCase)
- 'snake' : Snake case (snake_case)
- 'uppercaseSnake' : Uppercase snake case (UPPERCASE_SNAKE_CASE)
- 'kebab' : Kebab case (kebab_cace)
- 'uppercaseKebab' : Uppercase kebab case (UPPERCASE_KEBAB_CASE)
- 'capital' : Capital case (Capital Case)
- 'spaceCase' : Space case (space case)
- 'uppercaseSpace' : Uppercase space case (UPPERCASE SPACE CASE)
- 'dot' : Dot case (dot.case) 
- 'uppercaseDog : Uppercase dot case (UPPERCASE.DOT.CASE)

## Importing utils functions

You can also import all utils functions to convert a string to a splitted array of strings, and the ones to convert back to a string.

```
import { fromCamel, toSnake } from '@fougassum/tocase';

const str = 'welcomeToFrance';
const splitted = fromCamel(str);
const snakeStr = toSnake(splitted);

console.log(snakeStr); // 'welcome_to_france'
``` 