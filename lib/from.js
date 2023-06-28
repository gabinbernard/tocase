function fromCamel(str) {
    const kebabbedString = str
        .replaceAll(/(?<![A-Z]|^)([A-Z])/g, "-$1")
        .replaceAll(/(?<=[A-Z])([A-Z])(?=[a-z])/g, "-$1")
        .replaceAll(/(?<![0-9])([0-9])/g, "-$1");
    return kebabbedString.split("-").map((part) => part.toLowerCase());
}
function fromPascal(str) {
    const kebabbedString = str
        .replaceAll(/(?<![A-Z]|^)([A-Z])/g, "-$1")
        .replaceAll(/(?<=[A-Z])([A-Z])(?=[a-z])/g, "-$1")
        .replaceAll(/(?<![0-9])([0-9])/g, "-$1");
    console.log(kebabbedString);
    return kebabbedString.split("-").map((part) => part.toLowerCase());
}
function fromSnake(str) {
    return str.split("_").map((part) => part.toLowerCase());
}
function fromKebab(str) {
    return str.split("-").map((part) => part.toLowerCase());
}
export { fromCamel, fromPascal, fromSnake, fromKebab };
