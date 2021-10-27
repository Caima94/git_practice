/*Form interactivity */

if (document.body.contains(document.getElementById('contactForm'))) {
    const resetForm = document.getElementById('resetButton');
    const submitForm = document.getElementById('submitButton');
    const emailValue = document.getElementById('email');
    const phoneValue = document.getElementById('phone');

    const resetFunction = () => {
        document.getElementById('contactForm').reset();
    }

    const submitFunction = () => {
        if (emailValue === null && phoneValue === null) {
            alert('Please fill in at least your email or your phone number!')
        };
        alert('Your message would have been sent! Due to this page being entirely for practice however, the form does not really send the information anywhere.');
    }

    resetForm.onclick = resetFunction;
    submitForm.onclick = submitFunction;
}