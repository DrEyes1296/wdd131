// --- Footer and Hamburger Menu ---
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

// A function to close the mobile menu
function closeMenu() {
    navigation.classList.remove('open');
    menuButton.classList.remove('open');
}

// --- Temple Data ---
const temples = [
  {
    templeName: "Aba Nigeria",
    location: "Aba, Nigeria",
    dedicated: "2005, August, 7",
    area: 11500,
    imageUrl: "images/aba-nigeria.jpg"
  },
  {
    templeName: "Manti Utah",
    location: "Manti, Utah, United States",
    dedicated: "1888, May, 21",
    area: 74792,
    imageUrl: "images/manti-utah.jpg"
  },
  {
    templeName: "Payson Utah",
    location: "Payson, Utah, United States",
    dedicated: "2015, June, 7",
    area: 96630,
    imageUrl: "images/payson-utah.jpg"
  },
  {
    templeName: "Yigo Guam",
    location: "Yigo, Guam",
    dedicated: "2020, May, 2",
    area: 6861,
    imageUrl: "images/yigo-guam.jpg"
  },
  {
    templeName: "Washington D.C.",
    location: "Kensington, Maryland, United States",
    dedicated: "1974, November, 19",
    area: 156558,
    imageUrl: "images/washington-dc.jpg"
  },
  {
    templeName: "Lima Perú",
    location: "Lima, Perú",
    dedicated: "1986, January, 10",
    area: 9600,
    imageUrl: "images/lima-peru.jpg"
  },
  {
    templeName: "Mexico City Mexico",
    location: "Mexico City, Mexico",
    dedicated: "1983, December, 2",
    area: 116642,
    imageUrl: "images/mexico-city-mexico.jpg"
  },
  {
    templeName: "Salt Lake",
    location: "Salt Lake City, Utah, United States",
    dedicated: "1893, April, 6",
    area: 253015,
    imageUrl: "images/salt-lake.jpg"
  },
  {
    templeName: "The Hague Netherlands",
    location: "Zoetermeer, Netherlands",
    dedicated: "2002, September, 8",
    area: 10500,
    imageUrl: "images/hague-netherlands.jpg"
  },
  {
    templeName: "Sapporo Japan",
    location: "Atsubetsu-ku, Sapporo, Japan",
    dedicated: "2016, August, 21",
    area: 48485,
    imageUrl: "images/sapporo-japan.jpg"
  },
  {
    templeName: "Frankfurt Germany",
    location: "Friedrichsdorf, Germany",
    dedicated: "1987, August, 28",
    area: 24170,
    imageUrl: "images/frankfurt-germany.jpg"
  }
];

const gallery = document.querySelector(".gallery");
const pageHeading = document.querySelector("main h2");

function createTempleCard(temple) {
    const figure = document.createElement("figure");
    const img = document.createElement("img");
    const figcaption = document.createElement("figcaption");
    const name = document.createElement("h3");
    const location = document.createElement("p");
    const dedicated = document.createElement("p");
    const area = document.createElement("p");

    name.textContent = temple.templeName;
    location.innerHTML = `<strong>Location:</strong> ${temple.location}`;
    dedicated.innerHTML = `<strong>Dedicated:</strong> ${temple.dedicated}`;
    area.innerHTML = `<strong>Size:</strong> ${temple.area.toLocaleString()} sq ft`;
    
    img.src = temple.imageUrl;
    img.alt = `The ${temple.templeName} Temple`;
    img.loading = "lazy";

    figcaption.appendChild(name);
    figcaption.appendChild(location);
    figcaption.appendChild(dedicated);
    figcaption.appendChild(area);

    figure.appendChild(img);
    figure.appendChild(figcaption);
    
    return figure;
}

function displayTemples(templeList) {
    gallery.innerHTML = "";
    templeList.forEach(temple => {
        
        const card = createTempleCard(temple);
        gallery.appendChild(card);
    });
}

// --- Navigation Event Listeners ---
document.querySelector("#nav-home").addEventListener("click", () => {
    pageHeading.textContent = "Home";
    displayTemples(temples);
    closeMenu(); // Close menu on mobile
});

document.querySelector("#nav-old").addEventListener("click", () => {
    pageHeading.textContent = "Old Temples";
    const oldTemples = temples.filter(temple => new Date(temple.dedicated).getFullYear() < 1900);
    displayTemples(oldTemples);
    closeMenu(); // Close menu on mobile
});

document.querySelector("#nav-new").addEventListener("click", () => {
    pageHeading.textContent = "New Temples";
    const newTemples = temples.filter(temple => new Date(temple.dedicated).getFullYear() > 2000);
    displayTemples(newTemples);
    closeMenu(); // Close menu on mobile
});

document.querySelector("#nav-large").addEventListener("click", () => {
    pageHeading.textContent = "Large Temples";
    const largeTemples = temples.filter(temple => temple.area > 90000);
    displayTemples(largeTemples);
    closeMenu(); // Close menu on mobile
});

document.querySelector("#nav-small").addEventListener("click", () => {
    pageHeading.textContent = "Small Temples";
    const smallTemples = temples.filter(temple => temple.area < 10000);
    displayTemples(smallTemples);
    closeMenu(); // Close menu on mobile
});

// Display all temples when the page first loads.
displayTemples(temples);