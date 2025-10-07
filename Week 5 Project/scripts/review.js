document.addEventListener('DOMContentLoaded', () => {
    const reviewCountSpan = document.getElementById('reviewCount');
    if (reviewCountSpan) {
        let count = Number(localStorage.getItem('reviewSubmissionsCount')) || 0;
        count++;
        reviewCountSpan.textContent = count;
        localStorage.setItem('reviewSubmissionsCount', count);
    }

    const lastModifiedSpan = document.getElementById('lastModified');
    if (lastModifiedSpan) {
        lastModifiedSpan.textContent = document.lastModified;
    }

    const currentYearSpan = document.getElementById('currentYear');
    if (currentYearSpan) {
        currentYearSpan.textContent = new Date().getFullYear();
    }
});