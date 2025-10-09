document.addEventListener('DOMContentLoaded', function() {

    // Toggles the mobile navigation when the hamburger icon is clicked
    const hamburgerMenu = document.querySelector('.hamburger-menu');
    const mainNav = document.querySelector('.main-nav');

    if (hamburgerMenu && mainNav) {
        hamburgerMenu.addEventListener('click', function() {
            mainNav.classList.toggle('active');
        });
    }

    const contactForm = document.querySelector('#contact-form');
    const formConfirmation = document.querySelector('#form-confirmation');

    // This function runs when the user submits the contact form
    function handleFormSubmit(event) {
        event.preventDefault(); // Stops the page from reloading on submit

        // Grab all the checked services and put them into an array
        const selectedServices = [];
        const checkedBoxes = document.querySelectorAll('input[name="service"]:checked');
        checkedBoxes.forEach(function(checkbox) {
            selectedServices.push(checkbox.value);
        });

        const companyName = document.querySelector('#company-name').value;
        const successMessage = `Thank you, ${companyName}! Your request for an estimate has been received. We will contact you within one business day.`;

        // Show the "Thank you" message on the page
        if (formConfirmation) {
            formConfirmation.textContent = successMessage;
            formConfirmation.style.display = 'block';
        }

        // Save a note in the browser so we remember the form was sent
        localStorage.setItem('formSubmitted', 'true');

        contactForm.reset();
    }

    if (contactForm) {
        contactForm.addEventListener('submit', handleFormSubmit);
    }

    // If we find our note from a previous visit, show a welcome back message
    const formSubmitted = localStorage.getItem('formSubmitted');
    if (formSubmitted === 'true' && formConfirmation) {
        formConfirmation.textContent = "Welcome back! You have previously submitted an estimate request.";
        formConfirmation.style.display = 'block';
    }
});