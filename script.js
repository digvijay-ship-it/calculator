let number1 = `0`;
let operator;
let number2 = ``;

function operation(operator, number1 = 0, number2 = 0) {
    number1 = Number(number1);
    number2 = Number(number2);
    
    if (operator === "/") {
        number1 = number1 / number2;
        return number1;
    }
    if (operator === "*") {
        return number1 * number2;
    }
    if (operator === "-") {
        return number1 - number2;
    } if (operator === "+") {
        return number1 + number2;
    }
}

function actOnOperatorCount(event) {
    //calculate if already operator is assigned
    if (operator && number2) {
        number1 = operation(operator, number1, number2);
        if ((`${number1}`).includes('.')) {
            number1 = number1.toFixed(1);
        }
        resultDiv.innerText = calDiv.innerText = number1;
        number2 = '';
    }
    //if operator is not assigned
    operator = event.target.innerHTML;
}

function resetCalScreen() {
    calDiv.innerText = '';
    resultDiv.innerText = '';
}
function resetCalNum() {
    operator = '';
    number2 = ``;
}

function fillNum(num) {
    if (!operator) {
        number1 = number1 + num;
    }
    else {
        number2 = number2 + num;
    }
}

const calDiv = document.querySelector(`#calScreen > #calDiv`);
const resultDiv = document.querySelector(`#calScreen > #resultDiv`);

const numbersAndOperators = document.querySelectorAll(`.buttonLayer > button`);

numbersAndOperators.forEach(element => {
    element.addEventListener(`click`, (event) => {
        switch (event.target.innerHTML) {
            case "*":
                actOnOperatorCount(event);
                break;
            case "/":
                actOnOperatorCount(event);
                break;
            case "-":
                actOnOperatorCount(event);
                break;
            case "+":
                actOnOperatorCount(event);
                break;
            case ".":
                fillNum(event.target.innerHTML);
                break;
            case "=":
                if (operator) {
                    number1 = operation(operator, number1, number2);
                    if ((`${number1}`).includes('.')) {
                        number1 = number1.toFixed(1);
                    }
                    resultDiv.innerText = calDiv.innerText = number1;
                    resetCalNum();
                }
                break;
            default:
                fillNum(event.target.innerHTML);
                break;
        }
        if (operator && number2) {
            calDiv.innerText = `${number1} ${operator ? operator : ''} ${number2 ? number2 : ''}`;
        }
        else if (operator) {
            calDiv.innerText = `${number1} ${operator}`;
        }
        else {
            calDiv.innerText = `${number1}`;
        }
    });
});


const clear = document.querySelector(`#clear`);

const deleteLast = document.querySelector(`#delete`);



// event listener to clear and delete buttons
const reset = document.querySelector('#clear');
reset.addEventListener('click', () => {
    number1 = ``;
    resetCalNum();
    resetCalScreen();
});

const deleteN = document.querySelector('#delete');
deleteN.addEventListener('click', () => {
    if (!operator) {
        // number1 = Math.floor(number1 / 10);
        number1 = number1.slice(0, number1.length - 1);
    }
    else if (!number2) {
        operator = undefined;
    }
    else {
        number2 = number2.slice(0, number2.length - 1);
    }
    calDiv.innerText = `${number1} ${operator ? operator : ''} ${number2 ? number2 : ''}`;
});