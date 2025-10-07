document.addEventListener('DOMContentLoaded', () => {
    // --- ADVANCED FEATURE: Get Product Name from URL ---
    const params = new URLSearchParams(window.location.search);
    const productName = params.get('productName');
    const confirmationMessage = document.getElementById('confirmationMessage');

    // Update the confirmation message if a product name exists
    if (productName && confirmationMessage) {
        confirmationMessage.textContent = `Thank you for your review of the ${productName}! Your feedback helps us improve.`;
    }

    // --- Review Counter using localStorage ---
    const reviewCountSpan = document.getElementById('reviewCount');
    if (reviewCountSpan) {
        let count = Number(localStorage.getItem('reviewSubmissionsCount')) || 0;
        count++;
        reviewCountSpan.textContent = count;
        localStorage.setItem('reviewSubmissionsCount', count);
    }
    
    // --- Footer Scripts ---
    const lastModifiedSpan = document.getElementById('lastModified');
    if (lastModifiedSpan) {
        lastModifiedSpan.textContent = document.lastModified;
    }

    const currentYearSpan = document.getElementById('currentYear');
    if (currentYearSpan) {
        currentYearSpan.textContent = new Date().getFullYear();
    }
});