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
// This now selects the temples directly from your HTML file
const temples = document.querySelectorAll('.gallery figure');
const pageHeading = document.querySelector('main h2');

// Add data attributes to your HTML for filtering
// This makes it easier to get the data for each temple
temples.forEach(temple => {
    const figcaption = temple.querySelector('figcaption').textContent;
    if (figcaption.includes('Logan') || figcaption.includes('St. George')) {
        temple.dataset.era = 'old';
    } else {
        temple.dataset.era = 'new';
    }

    if (figcaption.includes('Washington') || figcaption.includes('Los Angeles') || figcaption.includes('Hamilton')) {
        temple.dataset.size = 'large';
    } else {
        temple.dataset.size = 'small';
    }
});

const displayFilteredTemples = (filterType, filterValue, heading) => {
    pageHeading.textContent = heading;
    temples.forEach(temple => {
        if (temple.dataset[filterType] === filterValue) {
            temple.style.display = 'block';
        } else {
            temple.style.display = 'none';
        }
    });
};

const displayAllTemples = () => {
    pageHeading.textContent = 'Home';
    temples.forEach(temple => {
        temple.style.display = 'block';
    });
};

// Event Listeners for filtering
document.querySelector('#nav-home').addEventListener('click', (e) => {
    e.preventDefault();
    displayAllTemples();
});

document.querySelector('#nav-old').addEventListener('click', (e) => {
    e.preventDefault();
    displayFilteredTemples('era', 'old', 'Old Temples');
});

document.querySelector('#nav-new').addEventListener('click', (e) => {
    e.preventDefault();
    displayFilteredTemples('era', 'new', 'New Temples');
});

document.querySelector('#nav-large').addEventListener('click', (e) => {
    e.preventDefault();
    displayFilteredTemples('size', 'large', 'Large Temples');
});

document.querySelector('#nav-small').addEventListener('click', (e) => {
    e.preventDefault();
    displayFilteredTemples('size', 'small', 'Small Temples');
});
