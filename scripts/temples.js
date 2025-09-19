// --- 1. FOOTER DYNAMIC INFORMATION ---
const currentYear = new Date().getFullYear();
document.getElementById('currentyear').textContent = currentYear;

const lastModified = document.lastModified;
document.getElementById('lastmodified').textContent = `Last Modification: ${lastModified}`;


// --- 2. HAMBURGER MENU LOGIC ---
const menuButton = document.querySelector('#menu');
const navigation = document.querySelector('.navigation');

menuButton.addEventListener('click', () => {
    navigation.classList.toggle('open');
    menuButton.classList.toggle('open');
});


// --- 3. TEMPLE FILTERING LOGIC ---
const pageHeading = document.querySelector('main h2');
const galleryFigures = document.querySelectorAll('.gallery figure');

// Function to display a filtered set of temples
const displayTemples = (templeList, headingText) => {
    galleryFigures.forEach(figure => {
        // Get the caption text from the <figcaption> element
        const figcaptionText = figure.querySelector('figcaption').textContent;

        // If the caption text is in our list, show the figure, otherwise hide it
        if (templeList.includes(figcaptionText)) {
            figure.style.display = 'flex'; // Use 'flex' to match our CSS
        } else {
            figure.style.display = 'none';
        }
    });
    // Update the main heading
    pageHeading.textContent = headingText;
};

// Function to show all temples for the "Home" link
const showAllTemples = () => {
    galleryFigures.forEach(figure => {
        figure.style.display = 'flex'; // Use 'flex' to match our CSS
    });
    pageHeading.textContent = 'Home';
};

// Arrays for each category based on the exact text in your HTML's <figcaption>
const oldTemples = [
    "Logan Utah Temple",
    "St. George Utah Temple"
];

const newTemples = [
    "Brasília Brazil Temple",
    "Miraflores Guatemala City Guatemala Temple"
];

const largeTemples = [
    "Washington D.C. Temple",
    "Los Angeles California Temple",
    "Hamilton New Zealand Temple"
];

const smallTemples = [
    "Taipei Taiwan Temple",
    "Colonia Juarez Chihuahua Mexico Temple"
];

// Add event listeners to navigation links
document.querySelector('#nav-home').addEventListener('click', (e) => {
    e.preventDefault(); // Prevent the link from trying to navigate
    showAllTemples();
});

document.querySelector('#nav-old').addEventListener('click', (e) => {
    e.preventDefault();
    displayTemples(oldTemples, 'Old Temples');
});

document.querySelector('#nav-new').addEventListener('click', (e) => {
    e.preventDefault();
    displayTemples(newTemples, 'New Temples');
});

document.querySelector('#nav-large').addEventListener('click', (e) => {
    e.preventDefault();
    displayTemples(largeTemples, 'Large Temples');
});

document.querySelector('#nav-small').addEventListener('click', (e) => {
    e.preventDefault();
    displayTemples(smallTemples, 'Small Temples');
});