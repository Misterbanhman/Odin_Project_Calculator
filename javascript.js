const buttonGrid = document.querySelector('.buttonGrid');
const buttonAmount = 16;


//ADDITION FUNCTION
function add(value1,value2) {
    const sum = value1 + value2;
    return sum;
}

//SUBTRACT FUNCTION
function subtract(value1,value2) {
    const subtraction = value1 - value2;
    return subtraction;
}

//MULTIPLICATION FUNCTION
function multiply(value1,value2) {
    const multiplication = value1 * value2;
    return multiplicationl
}

//DIVISION FUNCTION
function divide(value1,value2) {
    const division = value1 / value2;
    return division;
}

//OPERATION FUNCTION
function operate (operator, value1, value2) {
    if (operator === '+') {
        add(value1,value2);
    }

    else if (operator === '-') {
        subtract(value1,value2);
    }

    else if (operator === '*') {
        multiply(value1,value2);
    }

    else if (operator === '/') {
        divide(value1,value2);
    }

    else {
        alert("The value you entered in is not an operator. Please try again!");
        //loop here
    }
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
        console.log(buttonGrid)
        row.appendChild(button);
    }
}

createButtonGrid();

let button0 = document.querySelector('.button0');
button0.textContent = "7"

let button1 = document.querySelector('.button1');
button1.textContent = "8"

let button2 = document.querySelector('.button2');
button2.textContent = "9"

let button3 = document.querySelector('.button3');
button3.textContent = "÷"