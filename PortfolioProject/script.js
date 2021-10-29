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


const calculator = document.querySelector('.calculator-grid');
const buttons = calculator.querySelector('button');

buttons.addEventListener('click', e => {
    if (e.target.matches('button')) {
        const key = e.target
        const action = key.dataset.action
        if (!action) {
            console.log('number');
    }
}})

