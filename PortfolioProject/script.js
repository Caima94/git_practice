/*Form interactivity */

if (document.body.contains(document.getElementById('contactForm'))) {
    const resetForm = document.getElementById('resetButton');
    const submitForm = document.getElementById('submitButton');
    
    const resetFunction = () => {
        document.getElementById('contactForm').reset();
    }

    const submitFunction = () => {
        if ((document.getElementById('email').value.length == 0) && (document.getElementById('phone').value.length == 0)) {
            alert('Please enter at least your email or your phone number!');
        } else if ((document.getElementById('email').value.length !== 0) || (document.getElementById('phone').value.length !== 0)) {
        alert('Your message would have been sent! Due to this page being entirely for practice however, the form does not really send the information anywhere.');
    }}

    resetForm.onclick = resetFunction;
    submitForm.onclick = submitFunction;
}

/*form code ends */

/* Calculator code */

const numberButtons = document.querySelectorAll('.number');
const operatorButtons = document.querySelectorAll('.operator');
const equalsButton = document.querySelector('.equals');
const deleteButton = document.querySelector('.delete');
const clearButton = document.querySelector('.clear');
const previousOperation = document.querySelector('.previous-operation');
const currentOperation = document.querySelector('.current-operation');

const clear = () => {
    if(document.getElementById('output').contains) {
        document.getElementById('output').reset();
    }
}
clearButton.onclick = clear;


const erase = () => {
    
}

const addNumber = number => {
    
}

const operation = operator  => {
    
}

const display = () => {
    
}