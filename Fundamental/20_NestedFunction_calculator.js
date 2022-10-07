
function add(num1, num2) {
    return num1 + num2;
}

function subtraction(num1, num2) {
    return num1 - num2;
}
function division(num1, num2) {
    return (num1 / num2).toFixed(4);
}

function multiply(num1, num2) {
    return num1 * num2;
}

function calculator(num1, num2, operator) {
    return operator(num1, num2);
}

console.log(  calculator(41, 7, division ));