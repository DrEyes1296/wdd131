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
const temples = document.querySelectorAll('.gallery figure');
const pageHeading = document.querySelector('main h2');

// Function to display all temples
const displayAllTemples = () => {
    temples.forEach(temple => {
        temple.style.display = 'block';
    });
    pageHeading.textContent = 'Home';
};

// Function to display a filtered set of temples
const displayFilteredTemples = (filter, heading) => {
    temples.forEach(temple => {
        if (filter.includes(temple.querySelector('figcaption').textContent)) {
            temple.style.display = 'block';
        } else {
            temple.style.display = 'none';
        }
    });
    pageHeading.textContent = heading;
};

// Create arrays for each category
const oldTemples = ["Logan Utah Temple", "St. George Utah Temple"];
const newTemples = ["Brasília Brazil Temple", "Miraflores Guatemala City Guatemala Temple"];
const largeTemples = ["Washington D.C. Temple", "Los Angeles California Temple", "Hamilton New Zealand Temple"];
const smallTemples = ["Taipei Taiwan Temple", "Colonia Juarez Chihuahua Mexico Temple"];

// Add event listeners to navigation links
document.querySelector('#nav-home').addEventListener('click', (e) => {
    e.preventDefault();
    displayAllTemples();
});

document.querySelector('#nav-old').addEventListener('click', (e) => {
    e.preventDefault();
    displayFilteredTemples(oldTemples, 'Old Temples');
});

document.querySelector('#nav-new').addEventListener('click', (e) => {
    e.preventDefault();
    displayFilteredTemples(newTemples, 'New Temples');
});

document.querySelector('#nav-large').addEventListener('click', (e) => {
    e.preventDefault();
    displayFilteredTemples(largeTemples, 'Large Temples');
});

document.querySelector('#nav-small').addEventListener('click', (e) => {
    e.preventDefault();
    displayFilteredTemples(smallTemples, 'Small Temples');
});