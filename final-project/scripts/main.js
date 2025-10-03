document.addEventListener('DOMContentLoaded', function() {

    // --- 1. HAMBURGER MENU FUNCTIONALITY ---
    const hamburgerMenu = document.querySelector('.hamburger-menu');
    const mainNav = document.querySelector('.main-nav');

    if (hamburgerMenu && mainNav) {
        hamburgerMenu.addEventListener('click', function() {
            mainNav.classList.toggle('active');
        });
    }


    // --- 2. CONTACT FORM FUNCTIONALITY ---
    const contactForm = document.querySelector('#contact-form');
    const formConfirmation = document.querySelector('#form-confirmation');

    // Function to handle the form submission
    function handleFormSubmit(event) {
        // Prevent the default form submission which reloads the page
        event.preventDefault(); 

        // Get the company name value from the form input
        const companyNameInput = document.querySelector('#company-name');
        const companyName = companyNameInput.value;

        // Create a confirmation message using a template literal
        const successMessage = `Thank you, ${companyName}! Your request for an estimate has been received. We will contact you within one business day.`;

        // Display the success message on the page
        if (formConfirmation) {
            formConfirmation.textContent = successMessage;
            formConfirmation.style.display = 'block';
        }

        // Use localStorage to 'remember' that the form was submitted
        localStorage.setItem('formSubmitted', 'true');

        // Optional: Reset the form after submission
        contactForm.reset();
    }

    // Add the event listener to the form if it exists on the page
    if (contactForm) {
        contactForm.addEventListener('submit', handleFormSubmit);
    }


    // --- 3. LOCALSTORAGE "WELCOME BACK" FUNCTIONALITY ---
    // This is a simple example of using the data saved in localStorage
    const formSubmitted = localStorage.getItem('formSubmitted');
    
    // If the 'formSubmitted' item exists in localStorage, show a welcome back message
    if (formSubmitted === 'true' && formConfirmation) {
        formConfirmation.textContent = "Welcome back! You have previously submitted an estimate request.";
        formConfirmation.style.display = 'block';
    }

});