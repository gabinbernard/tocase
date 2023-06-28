function toCamel(strArray) {
    return strArray.reduce((acc, cur, ind) => {
        if (ind === 0)
            return cur.toLowerCase();
        return `${acc}${cur[0].toUpperCase()}${cur.slice(1)}`;
    }, "");
}
function toPascal(strArray) {
    return strArray.reduce((acc, cur) => `${acc}${cur[0].toUpperCase()}${cur.slice(1)}`, "");
}
function toKebab(strArray) {
    return strArray.join("-");
}
function toUppercaseKebab(strArray) {
    return toKebab(strArray).toUpperCase();
}
function toSnake(strArray) {
    return strArray.join("_");
}
function toUppercaseSnake(strArray) {
    return toSnake(strArray).toUpperCase();
}
function toCapital(strArray) {
    return strArray.map(part => `${part[0].toUpperCase()}${part.slice(1)}`).join(' ');
}
function toSpace(strArray) {
    return strArray.join(" ");
}
function toUppercaseSpace(strArray) {
    return toSpace(strArray).toUpperCase();
}
function toDot(strArray) {
    return strArray.join(".");
}
function toUppercaseDot(strArray) {
    return toDot(strArray).toUpperCase();
}
export { toCamel, toPascal, toSnake, toUppercaseSnake, toKebab, toUppercaseKebab, toCapital, toSpace, toUppercaseSpace, toDot, toUppercaseDot };
