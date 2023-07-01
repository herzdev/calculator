let finalCalculation = "";
let operators = ["+", "-", "*", "/"];
let usedOperator = "";
let operatorCounter = 0;
let firstNumber = 0;
let secondNumber = 0;
let operator = "";
let operatorIndex = 0;


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
        finalCalculation = displayField.value;
    } 
    
    else { //Wenn Button "=" gedrückt wurde

        operatorIndex = returnAllUsedOperatorsInOrder(finalCalculation);

        console.log(operatorIndex);

        /**
         * PSEUDO-CODE
         * Was ich bis jetzt habe:
         * 1. VOLLSTÄNDIGER STRING: 6+6+6
         * 2. POSITION ALLER OPERATOREN: [1,3]
         * WAS IST MEIN PROBLEM?
         * Die miteinander zu kalkulierenden Zahlen auf Basis der Operatoren-Indizes auswählen
         * Beispiel:
         * Wenn die Positionen der Operatoren bei [1,3] liegen, so müssen die Zahlen gleichzeitig in folgender range liegen:
         *  Zahl1: 0
         *  Zahl2: 2 (zwischen 1 und 3)
         *  Eine mögliche 3. Zahl konnte eruiert werden, wenn die Größe nach Index 3 größer als 1 ist (bedeutet, es gibt noch eine Zahl, aber keinen nachstehenden operator mehr)
         * Konkretes zu lösendes Problem:
         * Algo schreiben, der mir die Indexe der Operanden auf Basis der Indexe der Operatoren berechnet
         * MÖgliche Operatoren Arrays
         * [1,3,5,10] -> z1: immer 0 bis index0;
         * 
         * 1.zahl = zwischen 0        und index0 = [0,1]
         * 2.zahl = zwischen index0+1 und index1 = [2,3]
         * 3.zahl = zwischen index1+1 und index2
         * 4.zahl = zwischen index2+1 und index3

         */

        const numberPositions = [];
        const allNumberPositions = [];

        numberPositions.push(0);
        numberPositions.push(operatorIndex[0]);

        for(let i = 0; i < operatorIndex.length; i++) {
            numberPositions.push(operatorIndex[i] + 1);
            numberPositions.push(operatorIndex[i + 1]);
            // allNumberPositions.push(numberPositions);            
        }

        for(let i = 0; i <= numberPositions.length / 2; i++) {
            // operate();
            firstNumber = finalCalculation.slice(i,numberPositions[i+1]);
            secondNumber = finalCalculation.slice();
        }

        console.log(numberPositions);
        

        // Differenzierung zwischen ersten und weiteren Durchläufen notwendig
        // 1. Run: VON 0 BIS INDEX DES ERSTEN OPERATORS
        // ALLE WEITEREN RUNS:
        /**
         * index0+1 - index1
         * index1+1 - index2
         * ...
         */
            
        }
        

        

       
        
    }
    

// setzte EventListener auf jeden Button und triggert function writeAtDisplay bei Klick
const allBtns = document.querySelectorAll("button");
allBtns.forEach(btn => {
    btn.addEventListener("click", () => {
        writeAtDisplay(btn.innerText);
    });
});
