document.addEventListener('DOMContentLoaded', function() {
    // Add overlay div to body
    const overlay = document.createElement('div');
    overlay.className = 'fullscreen-overlay';
    overlay.innerHTML = `
        <div class="close-button">&times;</div>
        <img class="fullscreen-img" src="" alt="Fullscreen view">
    `;
    document.body.appendChild(overlay);

    // Add click handlers to all content images
    document.querySelectorAll('main img').forEach(img => {
        img.classList.add('zoomable-img');
        img.addEventListener('click', function() {
            const fullscreenImg = overlay.querySelector('.fullscreen-img');
            fullscreenImg.src = this.src;
            overlay.style.display = 'block';
        });
    });

    // Close overlay when clicking outside image or on close button
    overlay.addEventListener('click', function(e) {
        if (e.target === overlay || e.target.className === 'close-button') {
            overlay.style.display = 'none';
        }
    });
});