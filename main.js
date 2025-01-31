document.addEventListener('DOMContentLoaded', () => {
    // Smooth scrolling for navigation links
    document.querySelectorAll('nav a').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const section = document.querySelector(this.getAttribute('href'));
            section.scrollIntoView({ behavior: 'smooth' });
        });
    });

    // Glitch effect intensity on hover
    const glitchText = document.querySelector('.glitch');
    glitchText.addEventListener('mouseover', () => {
        glitchText.style.animation = 'glitch-anim 0.3s infinite';
    });
    glitchText.addEventListener('mouseout', () => {
        glitchText.style.animation = '';
    });
});