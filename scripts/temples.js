
const currentYear = new Date().getFullYear();
document.getElementById('currentyear').textContent = currentYear;

const lastModified = document.lastModified;
document.getElementById('lastmodified').textContent = `Last Modification: ${lastModified}`;



const menuButton = document.querySelector('#menu');
const navigation = document.querySelector('.navigation');

menuButton.addEventListener('click', () => {
    navigation.classList.toggle('open');
    menuButton.classList.toggle('open');
});



const pageHeading = document.querySelector('main h2');
const galleryFigures = document.querySelectorAll('.gallery figure');


const displayTemples = (templeList, headingText) => {
    galleryFigures.forEach(figure => {
        
        const figcaptionText = figure.querySelector('figcaption').textContent;

        if (templeList.includes(figcaptionText)) {
            figure.style.display = 'flex'; // 
        } else {
            figure.style.display = 'none';
        }
    });
    
    pageHeading.textContent = headingText;
};


const showAllTemples = () => {
    galleryFigures.forEach(figure => {
        figure.style.display = 'flex'; 
    });
    pageHeading.textContent = 'Home';
};

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