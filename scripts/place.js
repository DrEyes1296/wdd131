const currentYearSpan = document.getElementById('currentyear');
const lastModifiedSpan = document.getElementById('lastModified');

const currentYear = new Date().getFullYear();
const lastModified = document.lastModified;

currentYearSpan.textContent = currentYear;
lastModifiedSpan.textContent = lastModified;


// Wind Chill Calculation
const temperature = parseFloat(document.getElementById('temp').textContent);
const windSpeed = parseFloat(document.getElementById('windspeed').textContent);
const windChillElem = document.getElementById('windchill');

// Function to calculate wind chill factor (Metric)
function calculateWindChill(temp, speed) {
    // Formula: 13.12 + 0.6215*T - 11.37*V^0.16 + 0.3965*T*V^0.16
    return (13.12 + 0.6215 * temp - 11.37 * Math.pow(speed, 0.16) + 0.3965 * temp * Math.pow(speed, 0.16)).toFixed(1);
}

// Check if conditions are met to calculate wind chill
if (temperature <= 10 && windSpeed > 4.8) {
    const windChillValue = calculateWindChill(temperature, windSpeed);
    windChillElem.textContent = `${windChillValue}°C`;
} else {
    windChillElem.textContent = "N/A";
}