const buttonGrid = document.querySelector('.buttonGrid');
const calcContent1 = document.querySelector('.calc-Content1');
const calcContent2 = document.querySelector('.calc-Content2');

let decimalPressed = false;
let symbolPressed = false;
let displayValue = ["","",""];
const buttonAmount = 16;

calcContent2.textContent = 0;


//ADDITION FUNCTION
function add(value1,value2) {
    let sum = Number(value1) + Number(value2);
    sum += '';
    return sum;
}

//SUBTRACT FUNCTION
function subtract(value1,value2) {
    let subtraction = value1 - value2;
    return subtraction;
}

//MULTIPLICATION FUNCTION
function multiply(value1,value2) {
    let multiplication = value1 * value2;
    return multiplication;
}

//DIVISION FUNCTION
function divide(value1,value2) {
    let division = value1 / value2;
    return division;
}

function round(value) {
    return Math.round(value *10)/10;
}

//OPERATION FUNCTION
function operate (operator, value1, value2) {
    if (operator === '+') {
        return round(add(value1,value2));
    }

    else if (operator === '-') {
        return round(subtract(value1,value2));
    }

    else if (operator === '*') {
        return round(multiply(value1,value2));
    }

    else {
        return round(divide(value1,value2));
    }
}

function containsDecimal (string) {
    if (string.indexOf('.') > -1) {
        return true;
    }
    else {
        return false;
    }
}

//Event Click Listener
function clickListener() {
    const buttons = document.querySelectorAll('button');

    buttons.forEach((button) => {
        button.addEventListener('click', function(event) {
            let buttonPressed = (event.target).textContent;
            
            if (buttonPressed === 'RESET') {
                displayValue[0] = '';
                displayValue[1] = '';
                displayValue[2] = '';
                calcContent1.textContent = '';
                calcContent2.textContent = 0;
                symbolPressed = false;
            }

            else if (buttonPressed === 'BACKSPACE') {
                if (symbolPressed === false) {
                    displayValue[0] = '';
                    calcContent2.textContent = displayValue[0];
                }

                else{
                    displayValue[2] = '';
                    calcContent1.textContent = displayValue[0]+displayValue[1];
                }
            }

            else if (buttonPressed === '.') {
                if (decimalPressed === false && containsDecimal(displayValue[0]) === false && displayValue[2] === '') {
                    decimalPressed = true;
                    displayValue[0] += buttonPressed;
                    // console.log("You pressed the decimal")
                }

                else if ((decimalPressed === false || decimalPressed === true) && containsDecimal(displayValue[2]) === false && displayValue[2].length > 0) {
                    displayValue[2] += buttonPressed;
                }
                else {

                }
            }
            
            else if (symbolPressed === false) {
                if (buttonPressed === '+' || buttonPressed === '-' || buttonPressed === '*' || buttonPressed === '÷') {
                    symbolPressed = true;
                    displayValue[1] = buttonPressed;
                    calcContent1.textContent +=  calcContent2.textContent + buttonPressed;
                    // console.log("You pressed a symbol!")
                }
                else {
                    displayValue[0] += buttonPressed;
                    calcContent2.textContent = displayValue[0];
                    decimalPressed = false;
                }
            }
            
            //Symbol Pressed is true
            else {
                if (buttonPressed === '+' || buttonPressed === '-' || buttonPressed === '*' || buttonPressed === '÷') {
                    if (displayValue[2] != "") {
                        displayValue[0] = operate(displayValue[1],displayValue[0],displayValue[2]);
                        displayValue[1] = buttonPressed;
                        displayValue[2] = "";
                        calcContent1.textContent = displayValue[0] + displayValue[1];
                        calcContent2.textContent = displayValue[0];     
                    }
                    
                    else {
                    displayValue[1] = buttonPressed;
                    calcContent1.textContent = calcContent2.textContent + buttonPressed;
                    }
                }

                else if (buttonPressed === '=') {
                    if (displayValue[2] != '') {
                        calcContent1.textContent = displayValue[0] + displayValue[1] + displayValue[2] + '=';
                        displayValue[0] = operate(displayValue[1],displayValue[0],displayValue[2]);
                        // displayValue[1] = "";
                        displayValue[2] = "";
                        calcContent2.textContent = displayValue[0];  
                    }
                    else {

                    }
                }

                else {
                    displayValue[2] += buttonPressed;
                    calcContent1.textContent = displayValue[0] + displayValue[1] + displayValue[2];
                    calcContent2.textContent = displayValue[2];
                }
            }

        });
    });
}

//Creates a 4x4 grid for the calculator button layout
function createButtonGrid() {
buttonGrid.style.gridTemplateColumns = 'repeat(4,1fr)';
buttonGrid.style.gridTemplateRows = 'repeat(4,1fr)';


    for(let i=0;i<buttonAmount;i++) {
        let rowClass = "row" + i;
        let buttonClass = "button" + i;

        let row = document.createElement('div');
        row.classList.add(rowClass);
        buttonGrid.appendChild(row);
        // let buttonDiv = document.getElementsByClassName(buttonClass);


        let button = document.createElement('button');
        button.classList.add(buttonClass);
        row.appendChild(button);
    }
    clickListener();
}

createButtonGrid();

//BUTTONS CREATED HERE

let button0 = document.querySelector('.button0');
button0.textContent = "7"

let button1 = document.querySelector('.button1');
button1.textContent = "8"

let button2 = document.querySelector('.button2');
button2.textContent = "9"

let button3 = document.querySelector('.button3');
button3.textContent = "÷"

let button4 = document.querySelector('.button4');
button4.textContent = "4"

let button5 = document.querySelector('.button5');
button5.textContent = "5"

let button6 = document.querySelector('.button6');
button6.textContent = "6"

let button7 = document.querySelector('.button7');
button7.textContent = "*"

let button8 = document.querySelector('.button8');
button8.textContent = "1"

let button9 = document.querySelector('.button9');
button9.textContent = "2"

let button10 = document.querySelector('.button10');
button10.textContent = "3"

let button11 = document.querySelector('.button11');
button11.textContent = "-"

let button12 = document.querySelector('.button12');
button12.textContent = "0"

let button13 = document.querySelector('.button13');
button13.textContent = "."

let button14 = document.querySelector('.button14');
button14.textContent = "+"

let button15 = document.querySelector('.button15');
button15.textContent = "="
