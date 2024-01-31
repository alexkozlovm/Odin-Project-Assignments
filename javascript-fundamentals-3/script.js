function add7(num) {
    return 7 + num;
}
console.log(add7(2))
function multiply(num1, num2) {
    return num1 * num2;
}
console.log(multiply(3, 2));
function capitalize(word) {
    return `${word.slice(0).charAt(0).toUpperCase()}${word.slice(1)}`;
}
console.log(capitalize("hello"))
function lastLetter(word) {
    return word.slice(word.length - 1);
}
console.log(lastLetter("test"));