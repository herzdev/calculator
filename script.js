// add two numbers together
function add(number1, number2) {
    console.log(number1 + number2);
    return number1 + number2;
}

// subtract one number from the other
function subtract(number1, number2) {
    console.log(number1 - number2);
    return number1 - number2;
}

// multiply two numbers together
function multiply(number1, number2) {
    console.log(number1 * number2);
    return number1 * number2;
}

// divide one number through the other
function divide(number1, number2) {
    console.log(number1 / number2);
    return number1 / number2;
}

function operate(number1, number2, operator) {
    switch(operator) {
        case "+":
            add(number1, number2);
            break;
        case "-":
            subtract(number1, number2);
            break;
        case "*":
            multiply(number1, number2);
        case "/":
            divide(number1, number2);
            break;
        default:
            alert(`${operator} ist kein gültiger Operator`);
            break;
    }
}

let finalCalculation = "";
let operators = ["+", "-", "*", "/"];
let usedOperator = "";
let operatorCounter = 0;
let firstNumber = 0;
let secondNumber = 0;
let operator = "";

// Schreibt in das Display Feld die geklickten Zahlen
function writeAtDisplay(value) {
    if(value !== "=") {
        const displayField = document.querySelector("#calculator-display");  
        if(displayField.value === "1 + 1 = 4") {
            displayField.value = ""; 
        }     
        displayField.value += value;
        finalCalculation = displayField.value;
    } else {
        for(let i = 0; i < 4; i++) {
            if (finalCalculation.includes(operators[i])) {
                // console.log("Folgender Operator wurde gefunden: " + operators[i]);
                usedOperator = operators[i];
                operatorCounter++;
            }
        }
        if(operatorCounter == 1) { //Wenn genau nur ein Operator im String gefunden wurde, so eruiere die Position des Operators und finde mittels Indexind die Zahlen VOR und NACH dem Operator heraus.
            // Kritik: Problem, wenn mehrere Operatoren verwendet werden
            // console.log(usedOperator + " wurde verwendet");
            let operatorIndex = finalCalculation.indexOf(usedOperator);
            
            firstNumber = Number((finalCalculation.slice(0,operatorIndex)));
            secondNumber = Number((finalCalculation.slice(operatorIndex+1)));
            // let result = firstNumber + usedOperator + secondNumber;
            // console.log(result);
            operate(firstNumber, secondNumber, usedOperator);
        }
        
    }
    
    
    /**
     * füge solange die jeweiligen zahlen und operatoren zusammen, bis = gedrückt wurde
     * wenn = gedrückt wurde, so arbeite aus dem finalen string den operanden 1, den operator sowie den operanden 2 heraus und speichere ihn in je eine variable
     * anschließend berechne das ergebnis auf basis der variablen
     * sollten mehrere operatoren vorkommen, so darf kein ergebnis berechnet werden
     */
}

// setzte EventListener auf jeden Button und triggert function writeAtDisplay bei Klick
const allBtns = document.querySelectorAll("button");
console.log(allBtns);
allBtns.forEach(btn => {
    btn.addEventListener("click", () => {
        writeAtDisplay(btn.innerText);
    });
});


