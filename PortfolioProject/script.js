/*Form interactivity */

if (document.body.contains(document.getElementById('contactForm'))) {
    const resetForm = document.getElementById('resetButton');
    const submitForm = document.getElementById('submitButton');

    const resetFunction = () => {
        document.getElementById('contactForm').reset();
    }

    const submitFunction = () => {
        if (document.contactForm.email.value == "" && document.contactForm.phone.value == 0) {
            alert('please provide at least your email or your phone number!');
        }
        alert('Your message would have been sent! Due to this page being entirely for practice however, the form does not really send the information anywhere.');
    }

    if (document.getElementById('email'))

    resetForm.onclick = resetFunction;
    submitForm.onclick = submitFunction;
}