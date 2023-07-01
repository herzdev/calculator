let finalString = "";
let operator = "";


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

//Errechne die Positionen wo überall im finalen String KEINE Nummer vorkommt und gibt deren einzelne Position zurück
function returnAllUsedOperatorsInOrder(finalString) {

    let newArray = finalString.split("");
    let allOperators = newArray.map((element, index) => {
        if (!(Number(element) >= 0 && Number(element) <= 9)) { //Wenn es sich um ein Zeichen handelt, speichere es in das neue Array
            return index; //filter überprüft nur true oder false
        }
    }).filter(operator => {
        if(operator !== "undefined") {
            return operator;
        }
    });    
    return allOperators;
}
// Schreibt in das Display Feld die geklickten Zahlen
function writeAtDisplay(value) {
    if(value !== "=") {
        const displayField = document.querySelector("#calculator-display");  
        if(displayField.value === "1 + 1 = 4") {
            displayField.value = ""; 
        }     
        displayField.value += value;
        finalString = displayField.value;
    } 
    
    else { //Wenn Button "=" gedrückt wurde

        
        

            
        }
       
        
    }
    

// setzte EventListener auf jeden Button und triggert function writeAtDisplay bei Klick
const allBtns = document.querySelectorAll("button");
allBtns.forEach(btn => {
    btn.addEventListener("click", () => {
        writeAtDisplay(btn.innerText);
    });
});
