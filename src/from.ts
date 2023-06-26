/**
 * A function that splits a camel case string into an array of strings.
 *
 * @param str
 * @returns {string[]}
 */
function fromCamel(str: string): string[] {
    const kebabbedString = str
        .replaceAll(/(?<![A-Z]|^)([A-Z])/g, "-$1")
        .replaceAll(/(?<=[A-Z])([A-Z])(?=[a-z])/g, "-$1")
        .replaceAll(/(?<![0-9])([0-9])/g, "-$1");
    return kebabbedString.split("-").map((part) => part.toLowerCase());
}

/**
 * A function that splits a pascal case string into an array of strings.
 *
 * @param str
 * @returns {string[]}
 */
function fromPascal(str: string): string[] {
    const kebabbedString = str
        .replaceAll(/(?<![A-Z]|^)([A-Z])/g, "-$1")
        .replaceAll(/(?<=[A-Z])([A-Z])(?=[a-z])/g, "-$1")
        .replaceAll(/(?<![0-9])([0-9])/g, "-$1");
    console.log(kebabbedString);
    return kebabbedString.split("-").map((part) => part.toLowerCase());
}

/**
 * A function that splits a snake case string into an array of strings.
 *
 * @param str
 * @returns {string[]}
 */
function fromSnake(str: string): string[] {
    return str.split("_").map((part) => part.toLowerCase());
}

/**
 * A function that splits a kebab case string into an array of strings.
 *
 * @param str
 * @returns {string[]}
 */
function fromKebab(str: string): string[] {
    return str.split("-").map((part) => part.toLowerCase());
}

export { fromCamel, fromPascal, fromSnake, fromKebab };
