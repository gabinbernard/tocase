import { fromCamel, fromPascal, fromSnake, fromKebab } from "./from.js";
import { toCamel, toPascal, toSnake, toUppercaseSnake, toKebab, toUppercaseKebab, toCapital, toSpace, toUppercaseSpace, toDot, toUppercaseDot, } from "./to.js";
const from = {
    pascal: fromPascal,
    camel: fromCamel,
    snake: fromSnake,
    kebab: fromKebab,
};
const to = {
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
function detectCase(str) {
    if (typeof str !== "string") {
        throw new TypeError("'str' must be of type string");
    }
    if (str.split("").some((cur) => cur === "-"))
        return "kebab";
    if (str.split("").some((cur) => cur === "_"))
        return "snake";
    if (str[0].toUpperCase() === str[0])
        return "pascal";
    return "camel";
}
function toCase(str, newCase) {
    const currentCase = detectCase(str);
    const destructuredStr = from[currentCase](str);
    const newStr = to[newCase](destructuredStr);
    return newStr;
}
export default toCase;
export { detectCase, fromCamel, fromPascal, fromSnake, fromKebab, toCamel, toPascal, toSnake, toUppercaseSnake, toKebab, toUppercaseKebab, toCapital, toSpace, toUppercaseSpace, toDot, toUppercaseDot };
