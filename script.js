// add two numbers together
function add(number1, number2) {
    return number1 + number2;
}

// subtract one number from the other
function subtract(number1, number2) {
    return number1 - number2;
}

// multiply two numbers together
function multiply(number1, number2) {
    return number1 * number2;
}

// divide one number through the other
function divide(number1, number2) {
    return number1 / number2;
}

function operate(number1, number2, operator) {
    switch(operator) {
        case "+":
            add(number1, number2, operator);
            break;
        case "-":
            subtract(number1, number2, operator);
            break;
        case "*":
            multiply(number1, number2, operator);
        case "/":
            divide(number1, number2, operator);
            break;
        default:
            alert(`${operator} ist kein gültiger Operator`);
            break;
    }

    // if(operator === "+") {
    //     add(number1, number2, operator);
    // } else if (operator === "-") {
    //     subtract(number1, number2, operator);
    // } else if (operator === "*") {
    //     multiply(number1, number2, operator);
    // } else if (operator === "/") {
    //     divide(number1, number2, operator);
    // } else {
    //     alert(`${operator} ist kein gültiger Operator`);
    // }
}

let firstNumber = 0;
let secondNumber = 0;
let operator = "";
