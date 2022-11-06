const buttonGrid = document.querySelector('.buttonGrid');
const calcContent1 = document.querySelector('.calc-Content1');
const calcContent2 = document.querySelector('.calc-Content2');

let symbolPressed = false;
let displayValue = ["","",""];
const buttonAmount = 16;

calcContent2.textContent = 0;


//ADDITION FUNCTION
function add(value1,value2) {
    let sum = value1 + value2;
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
    console.log("This is hit 2")
    return multiplication;
}

//DIVISION FUNCTION
function divide(value1,value2) {
    let division = value1 / value2;
    return division;
}

//OPERATION FUNCTION
function operate (operator, value1, value2) {
    if (operator === '+') {
        return add(value1,value2);
    }

    else if (operator === '-') {
        return subtract(value1,value2);
    }

    else if (operator === '*') {
        return multiply(value1,value2);
    }

    else {
        return divide(value1,value2);
    }
}

//Event Click Listener
function clickListener() {
    const buttons = document.querySelectorAll('button');

    buttons.forEach((button) => {
        button.addEventListener('click', function(event) {
            let buttonPressed = (event.target).textContent;
            
            if (symbolPressed === false) {
                if (buttonPressed === '+' || buttonPressed === '-' || buttonPressed === '*' || buttonPressed === '÷') {
                    symbolPressed = true;
                    displayValue[1] = buttonPressed;
                    calcContent1.textContent +=  calcContent2.textContent + buttonPressed;
                    // console.log(displayValue[0]);
                }
                else {
                    displayValue[0] += buttonPressed;
                    calcContent2.textContent = displayValue[0];
                }
            }
            
            //Symbol Pressed is true
            else {
                if (buttonPressed === '+' || buttonPressed === '-' || buttonPressed === '*' || buttonPressed === '÷') {
                    if (displayValue[2] != "") {
                        displayValue[0] = operate(displayValue[1],displayValue[0],displayValue[2]);
                        displayValue[2] = "";
                        calcContent1.textContent = displayValue[0] + buttonPressed;
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
