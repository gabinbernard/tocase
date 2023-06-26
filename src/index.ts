import { fromCamel, fromPascal, fromSnake, fromKebab } from "./from.js";
import {
    toCamel,
    toPascal,
    toSnake,
    toUppercaseSnake,
    toKebab,
    toUppercaseKebab,
    toCapital,
    toSpace,
    toUppercaseSpace,
    toDot,
    toUppercaseDot,
} from "./to.js";

/**
 * Supported cases you can convert string from (kebab and snakes include uppercase and lowercae variant)
 */
type FromCase = "camel" | "pascal" | "kebab" | "snake";

/**
 * Supported cases you can convert string to
 */
type ToCase =
    | "camel"
    | "pascal"
    | "kebab"
    | "snake"
    | "uppercaseSnake"
    | "uppercaseKebab"
    | "capital"
    | "space"
    | "uppercaseSpace"
    | "dot"
    | "uppercaseDot";

/**
 * An object containing parse functions to convert a string to a spliited array of strings.
 */
const from: { [key in FromCase]: (str: string) => string[] } = {
    pascal: fromPascal,
    camel: fromCamel,
    snake: fromSnake,
    kebab: fromKebab,
};

/**
 * An object containing parse functions to convert an array of strings to a specified case
 */
const to: { [key in ToCase]: (str: string[]) => string } = {
    pascal: toPascal,
    camel: toCamel,
    snake: toSnake,
    kebab: toKebab,
    uppercaseSnake: toUppercaseSnake,
    uppercaseKebab: toUppercaseKebab,
    capital: toCapital,
    space: toSpace,
    uppercaseSpace: toUppercaseSpace,
    dot: toDot,
    uppercaseDot: toUppercaseDot,
};

/**
 * A function to detect a string's case (Camel case, Pascal case, Snake case, Kebab case)
 *
 * @param str - The string you want the case from
 * @returns - The case of the given string ('camelCse', 'pascalCase', 'snakeCase', 'kebabCase')
 */
function detectCase(str: string): FromCase {
    if (typeof str !== "string") {
        throw new TypeError("'str' must be of type string");
    }

    if (str.split("").some((cur) => cur === "-")) return "kebab";
    if (str.split("").some((cur) => cur === "_")) return "snake";
    if (str[0].toUpperCase() === str[0]) return "pascal";
    return "camel";
}

/**
 * A function that takes a string and converts it to a given case
 *
 * @param str - String to convert case
 * @param newCase - Case to convert the str variable to
 * @returns
 */
function toCase(str: string, newCase: ToCase) {
    const currentCase: FromCase = detectCase(str);
    const destructuredStr = from[currentCase](str);
    const newStr = to[newCase](destructuredStr);

    return newStr;
}

export default toCase;
export {
    detectCase,
    fromCamel,
    fromPascal,
    fromSnake,
    fromKebab,
    toCamel,
    toPascal,
    toSnake,
    toUppercaseSnake,
    toKebab,
    toUppercaseKebab,
    toCapital,
    toSpace,
    toUppercaseSpace,
    toDot,
    toUppercaseDot
};
