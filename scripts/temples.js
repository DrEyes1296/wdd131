// --- 1. FOOTER DYNAMIC INFORMATION ---
const currentYear = new Date().getFullYear();
document.getElementById('currentyear').textContent = currentYear;

// Using the specific date and time as requested
const lastModified = "Thursday, September 18, 2025, 9:39 PM MDT";
document.getElementById('lastmodified').textContent = `Last Modification: ${lastModified}`;


// --- 2. HAMBURGER MENU LOGIC ---
const menuButton = document.querySelector('#menu');
const navigation = document.querySelector('.navigation');

menuButton.addEventListener('click', () => {
    navigation.classList.toggle('open');
    menuButton.classList.toggle('open');
});


// --- 3. TEMPLE DATA AND GALLERY LOGIC ---
const temples = [
    {
      templeName: "Aba Nigeria",
      location: "Aba, Nigeria",
      dedicated: "2005, August, 7",
      area: 11500,
      imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
    },
    {
      templeName: "Manti Utah",
      location: "Manti, Utah, United States",
      dedicated: "1888, May, 21",
      area: 74792,
      imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
    },
    {
      templeName: "Payson Utah",
      location: "Payson, Utah, United States",
      dedicated: "2015, June, 7",
      area: 96630,
      imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
    },
    {
      templeName: "Yigo Guam",
      location: "Yigo, Guam",
      dedicated: "2022, May, 22",
      area: 6861,
      imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
    },
    {
      templeName: "Washington D.C.",
      location: "Kensington, Maryland, United States",
      dedicated: "1974, November, 19",
      area: 160000,
      imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
    },
    {
      templeName: "Lima Perú",
      location: "Lima, Perú",
      dedicated: "1986, January, 10",
      area: 9600,
      imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
    },
    {
      templeName: "Mexico City Mexico",
      location: "Mexico City, Mexico",
      dedicated: "1983, December, 2",
      area: 116642,
      imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
    },
    {
        templeName: "St. George Utah",
        location: "St. George, Utah, United States",
        dedicated: "1877, April, 6",
        area: 142000,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/st-george-utah/400x250/st-george-temple-lds-1456149-wallpaper.jpg"
    },
    {
        templeName: "Colonia Juárez Chihuahua Mexico",
        location: "Colonia Juárez, Chihuahua, Mexico",
        dedicated: "1999, March, 6",
        area: 6800,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/colonia-juarez-chihuahua-mexico/400x250/colonia-juarez-chihuahua-mexico-temple-lds-1039759-wallpaper.jpg"
    }
];

const pageHeading = document.querySelector('main h1');
const gallery = document.querySelector('.gallery');

const createTempleCard = (temple) => {
    const figure = document.createElement('figure');
    const img = document.createElement('img');
    const figcaption = document.createElement('figcaption');

    img.src = temple.imageUrl;
    img.alt = temple.templeName;
    img.loading = 'lazy'; // This helps the page load faster

    figcaption.textContent = temple.templeName;
    
    figure.appendChild(img);
    figure.appendChild(figcaption);
    gallery.appendChild(figure);
};

const displayTemples = (templeList) => {
    gallery.innerHTML = '';
    templeList.forEach(createTempleCard);
};

// Event Listeners for filtering
document.querySelector('#nav-home').addEventListener('click', (e) => {
    e.preventDefault();
    pageHeading.textContent = 'Home';
    displayTemples(temples);
});

document.querySelector('#nav-old').addEventListener('click', (e) => {
    e.preventDefault();
    pageHeading.textContent = 'Old Temples';
    displayTemples(temples.filter(t => new Date(t.dedicated).getFullYear() < 1900));
});

document.querySelector('#nav-new').addEventListener('click', (e) => {
    e.preventDefault();
    pageHeading.textContent = 'New Temples';
    displayTemples(temples.filter(t => new Date(t.dedicated).getFullYear() > 2000));
});

document.querySelector('#nav-large').addEventListener('click', (e) => {
    e.preventDefault();
    pageHeading.textContent = 'Large Temples';
    displayTemples(temples.filter(t => t.area > 90000));
});

document.querySelector('#nav-small').addEventListener('click', (e) => {
    e.preventDefault();
    pageHeading.textContent = 'Small Temples';
    displayTemples(temples.filter(t => t.area < 10000));
});

// This loads all the temples when the page first opens
displayTemples(temples);
