/**
 * A function that joins an array of strings into a camel case string.
 *
 * @param strArray
 * @returns {string}
 */
function toCamel(strArray: string[]): string {
    return strArray.reduce((acc: string, cur: string, ind: number) => {
        if (ind === 0) return cur.toLowerCase();
        return `${acc}${cur[0].toUpperCase()}${cur.slice(1)}`;
    }, "");
}

/**
 * A function that joins an array of strings into a pascal case string.
 *
 * @param strArray
 * @returns {string}
 */
function toPascal(strArray: string[]): string {
    return strArray.reduce(
        (acc: string, cur: string) =>
            `${acc}${cur[0].toUpperCase()}${cur.slice(1)}`,
        ""
    );
}

/**
 * A function that joins an array of strings into an a kebab case string.
 *
 * @param strArray
 * @returns {string}
 */
function toKebab(strArray: string[]): string {
    return strArray.join("-");
}

/**
 * A function that joins an array of strings into an uppercase kebab case string.
 *
 * @param strArray
 * @returns {string}
 */
function toUppercaseKebab(strArray: string[]): string {
    return toKebab(strArray).toUpperCase();
}

/**
 * A function that joins an array of strings into a snake case string.
 *
 * @param strArray
 * @returns {string}
 */
function toSnake(strArray: string[]): string {
    return strArray.join("_");
}

/**
 * A function that joins an array of strings into an uppercase snake case string.
 *
 * @param strArray
 * @returns {string}
 */
function toUppercaseSnake(strArray: string[]): string {
    return toSnake(strArray).toUpperCase();
}

export {
    toCamel,
    toPascal,
    toSnake,
    toUppercaseSnake,
    toKebab,
    toUppercaseKebab,
};
