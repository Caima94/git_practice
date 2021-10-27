/*Form interactivity */

if (document.body.contains(document.getElementById('contactForm'))) {
    const reset = document.getElementById('resetButton');
    const submit = document.getElementById('submitButton');
    const emailValue = document.body.getElementById('email');
    const phoneValue = document.body.getElementById('phone');

    const resetFunction = () => {
        document.getElementById('contactForm').reset();
    }

    const submitFunction = () => {
        if (emailValue === null && phoneValue === null) {
            alert('Please fill in at least your email or your phone number!')
        };
        alert('Your message would have been sent! Due to this page being entirely for practice however, the form does not really send the information anywhere.');
    }

    reset.onclick = resetFunction;
    submit.onclick = submitFunction;
}